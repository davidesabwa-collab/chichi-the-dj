
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { addMix, getMixes, deleteMix } from '@/lib/firebase/firestore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mix } from '@/types/mix';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const [mixes, setMixes] = useState<Mix[]>([]);
  const [newMix, setNewMix] = useState({ title: '', coverUrl: '', genre: '', date: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchMixes();
      } else {
        router.push('/login');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchMixes = async () => {
    const mixesData = await getMixes();
    setMixes(mixesData);
  };

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

  const handleAddMix = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMix.title || !newMix.coverUrl || !newMix.genre || !newMix.date) {
        toast({
            variant: 'destructive',
            title: 'Missing Fields',
            description: 'Please fill out all fields to add a new mix.',
        });
        return;
    }
    try {
        await addMix({ ...newMix, views: 0 }); // Add mix with 0 views initially
        toast({
            title: 'Mix Added',
            description: 'The new mix has been successfully added.',
        });
        setNewMix({ title: '', coverUrl: '', genre: '', date: '' });
        fetchMixes(); // Refresh the list of mixes
    } catch (error: any) {
         toast({
            variant: 'destructive',
            title: 'Failed to Add Mix',
            description: error.message,
        });
    }
  };

  const handleDeleteMix = async (id: string) => {
    try {
        await deleteMix(id);
        toast({
            title: 'Mix Deleted',
            description: 'The mix has been successfully deleted.',
        });
        fetchMixes(); // Refresh the list
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Failed to Delete Mix',
            description: error.message,
        });
    }
  }

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
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Mixes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">Add a New Mix</h3>
                <form onSubmit={handleAddMix} className="space-y-4">
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" value={newMix.title} onChange={(e) => setNewMix({...newMix, title: e.target.value})} placeholder="e.g., Lagos To The Max Vol 07" className="bg-gray-800 border-gray-700" />
                    </div>
                     <div>
                        <Label htmlFor="coverUrl">Cover Image URL</Label>
                        <Input id="coverUrl" value={newMix.coverUrl} onChange={(e) => setNewMix({...newMix, coverUrl: e.target.value})} placeholder="https://placehold.co/600x400" className="bg-gray-800 border-gray-700" />
                    </div>
                     <div>
                        <Label htmlFor="genre">Genre</Label>
                        <Input id="genre" value={newMix.genre} onChange={(e) => setNewMix({...newMix, genre: e.target.value})} placeholder="e.g., Afrobeats" className="bg-gray-800 border-gray-700" />
                    </div>
                     <div>
                        <Label htmlFor="date">Release Date</Label>
                        <Input id="date" value={newMix.date} onChange={(e) => setNewMix({...newMix, date: e.target.value})} placeholder="e.g., 1 week ago" className="bg-gray-800 border-gray-700" />
                    </div>
                    <Button type="submit" className="w-full">Add Mix</Button>
                </form>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Existing Mixes</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                    {mixes.length > 0 ? mixes.map(mix => (
                        <div key={mix.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                            <div>
                                <p className="font-semibold">{mix.title}</p>
                                <p className="text-sm text-gray-400">{mix.genre} - {mix.date}</p>
                            </div>
                            <Button variant="destructive" size="sm" onClick={() => mix.id && handleDeleteMix(mix.id)}>Delete</Button>
                        </div>
                    )) : (
                        <p className="text-gray-500">No mixes found. Add one to get started.</p>
                    )}
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
