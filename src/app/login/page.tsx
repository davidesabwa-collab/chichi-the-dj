'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Login Successful',
        description: "Welcome back! You're now logged in.",
      });
      router.push('/'); // Redirect to homepage after login
    } catch (error: any) {
      console.error('Login Error:', error);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: error.message || 'Please check your credentials and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
           <Link href="/" className="inline-block">
             <Icons.logo className="h-20 w-20 mx-auto text-primary" />
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white uppercase">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Log in to access your account and book your next event.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-400">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white"
            />
          </div>
          <div className="grid gap-2">
             <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-400">Password</Label>
                <Link href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white"
            />
          </div>
          <Button type="submit" className="w-full font-bold uppercase tracking-wider" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
         <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
