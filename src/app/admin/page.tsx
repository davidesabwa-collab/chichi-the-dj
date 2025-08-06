
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({
        title: 'Signed Out',
        description: 'You have been successfully signed out.',
      });
      router.push('/');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Sign Out Failed',
        description: error.message,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-24 sm:py-32">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold uppercase">Admin Dashboard</h1>
                    {user && <p className="text-gray-400">Welcome, {user.email}</p>}
                </div>
                <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Manage Content</h2>
                <p className="text-gray-400">
                    This is where you will manage your website's content, such as mixes, events, shop items, and blog posts.
                </p>
                {/* Admin content management sections will go here */}
            </div>
        </main>
        <Footer />
    </div>
  );
}
