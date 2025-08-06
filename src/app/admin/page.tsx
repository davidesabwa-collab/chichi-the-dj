
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { addMix, getMixes, deleteMix, addEvent, getEvents, deleteEvent, addProduct, getProducts, deleteProduct } from '@/lib/firebase/firestore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mix } from '@/types/mix';
import { Event } from '@/types/event';
import { Product } from '@/types/product';
import { Separator } from '@/components/ui/separator';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const [mixes, setMixes] = useState<Mix[]>([]);
  const [newMix, setNewMix] = useState({ title: '', coverUrl: '', genre: '', date: '' });

  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({ title: '', posterUrl: '', aiHint: '', date: '', location: '', venue: '' });
  
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '', hoverImageUrl: '', aiHint: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchMixes();
        fetchEvents();
        fetchProducts();
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

  const fetchEvents = async () => {
    const eventsData = await getEvents();
    setEvents(eventsData);
  };

  const fetchProducts = async () => {
    const productsData = await getProducts();
    setProducts(productsData);
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
        await addMix({ ...newMix, views: 0 });
        toast({
            title: 'Mix Added',
            description: 'The new mix has been successfully added.',
        });
        setNewMix({ title: '', coverUrl: '', genre: '', date: '' });
        fetchMixes();
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
        fetchMixes();
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Failed to Delete Mix',
            description: error.message,
        });
    }
  }

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.posterUrl || !newEvent.date || !newEvent.location || !newEvent.venue) {
        toast({
            variant: 'destructive',
            title: 'Missing Fields',
            description: 'Please fill out all fields to add a new event.',
        });
        return;
    }
    try {
        await addEvent(newEvent);
        toast({
            title: 'Event Added',
            description: 'The new event has been successfully added.',
        });
        setNewEvent({ title: '', posterUrl: '', aiHint: '', date: '', location: '', venue: '' });
        fetchEvents();
    } catch (error: any) {
         toast({
            variant: 'destructive',
            title: 'Failed to Add Event',
            description: error.message,
        });
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
        await deleteEvent(id);
        toast({
            title: 'Event Deleted',
            description: 'The event has been successfully deleted.',
        });
        fetchEvents();
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Failed to Delete Event',
            description: error.message,
        });
    }
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl || !newProduct.aiHint) {
        toast({
            variant: 'destructive',
            title: 'Missing Fields',
            description: 'Please fill out all required fields to add a new product.',
        });
        return;
    }
    try {
        await addProduct(newProduct);
        toast({
            title: 'Product Added',
            description: 'The new product has been successfully added.',
        });
        setNewProduct({ name: '', price: '', imageUrl: '', hoverImageUrl: '', aiHint: '' });
        fetchProducts();
    } catch (error: any) {
         toast({
            variant: 'destructive',
            title: 'Failed to Add Product',
            description: error.message,
        });
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
        await deleteProduct(id);
        toast({
            title: 'Product Deleted',
            description: 'The product has been successfully deleted.',
        });
        fetchProducts();
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Failed to Delete Product',
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

        <div className="bg-gray-900/50 p-8 rounded-lg space-y-12">
          
          {/* Manage Mixes */}
          <div id="manage-mixes">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Mixes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-xl font-bold mb-4">Add a New Mix</h3>
                  <form onSubmit={handleAddMix} className="space-y-4">
                      <div>
                          <Label htmlFor="mix-title">Title</Label>
                          <Input id="mix-title" value={newMix.title} onChange={(e) => setNewMix({...newMix, title: e.target.value})} placeholder="e.g., Lagos To The Max Vol 07" className="bg-gray-800 border-gray-700" />
                      </div>
                       <div>
                          <Label htmlFor="mix-coverUrl">Cover Image URL</Label>
                          <Input id="mix-coverUrl" value={newMix.coverUrl} onChange={(e) => setNewMix({...newMix, coverUrl: e.target.value})} placeholder="https://placehold.co/600x400" className="bg-gray-800 border-gray-700" />
                      </div>
                       <div>
                          <Label htmlFor="mix-genre">Genre</Label>
                          <Input id="mix-genre" value={newMix.genre} onChange={(e) => setNewMix({...newMix, genre: e.target.value})} placeholder="e.g., Afrobeats" className="bg-gray-800 border-gray-700" />
                      </div>
                       <div>
                          <Label htmlFor="mix-date">Release Date</Label>
                          <Input id="mix-date" value={newMix.date} onChange={(e) => setNewMix({...newMix, date: e.target.value})} placeholder="e.g., 1 week ago" className="bg-gray-800 border-gray-700" />
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

          <Separator className="bg-gray-700"/>

          {/* Manage Events */}
          <div id="manage-events">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Add a New Event</h3>
                    <form onSubmit={handleAddEvent} className="space-y-4">
                        <div>
                            <Label htmlFor="event-title">Title</Label>
                            <Input id="event-title" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} placeholder="e.g., Summer Fest" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="event-posterUrl">Poster URL</Label>
                            <Input id="event-posterUrl" value={newEvent.posterUrl} onChange={(e) => setNewEvent({...newEvent, posterUrl: e.target.value})} placeholder="https://placehold.co/400x500" className="bg-gray-800 border-gray-700" />
                        </div>
                         <div>
                            <Label htmlFor="event-ai-hint">AI Hint for Poster</Label>
                            <Input id="event-ai-hint" value={newEvent.aiHint} onChange={(e) => setNewEvent({...newEvent, aiHint: e.target.value})} placeholder="e.g., summer party" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="event-date">Date</Label>
                            <Input id="event-date" value={newEvent.date} onChange={(e) => setNewEvent({...newEvent, date: e.target.value})} placeholder="e.g., Happening in 2 weeks" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="event-location">Location</Label>
                            <Input id="event-location" value={newEvent.location} onChange={(e) => setNewEvent({...newEvent, location: e.target.value})} placeholder="e.g., Seattle, WA" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="event-venue">Venue</Label>
                            <Input id="event-venue" value={newEvent.venue} onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})} placeholder="e.g., Gas Works Park" className="bg-gray-800 border-gray-700" />
                        </div>
                        <Button type="submit" className="w-full">Add Event</Button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Existing Events</h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                        {events.length > 0 ? events.map(event => (
                            <div key={event.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                                <div>
                                    <p className="font-semibold">{event.title}</p>
                                    <p className="text-sm text-gray-400">{event.venue} - {event.date}</p>
                                </div>
                                <Button variant="destructive" size="sm" onClick={() => event.id && handleDeleteEvent(event.id)}>Delete</Button>
                            </div>
                        )) : (
                            <p className="text-gray-500">No events found. Add one to get started.</p>
                        )}
                    </div>
                </div>
            </div>
          </div>

          <Separator className="bg-gray-700"/>

          {/* Manage Shop */}
          <div id="manage-shop">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Shop</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Add a New Product</h3>
                    <form onSubmit={handleAddProduct} className="space-y-4">
                        <div>
                            <Label htmlFor="product-name">Product Name</Label>
                            <Input id="product-name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} placeholder="e.g., T-shirt" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="product-price">Price</Label>
                            <Input id="product-price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} placeholder="e.g., $25.00" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="product-imageUrl">Image URL</Label>
                            <Input id="product-imageUrl" value={newProduct.imageUrl} onChange={(e) => setNewProduct({...newProduct, imageUrl: e.target.value})} placeholder="https://placehold.co/400x500" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="product-hoverImageUrl">Hover Image URL (Optional)</Label>
                            <Input id="product-hoverImageUrl" value={newProduct.hoverImageUrl} onChange={(e) => setNewProduct({...newProduct, hoverImageUrl: e.target.value})} placeholder="https://placehold.co/400x500" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                            <Label htmlFor="product-aiHint">AI Hint for Image</Label>
                            <Input id="product-aiHint" value={newProduct.aiHint} onChange={(e) => setNewProduct({...newProduct, aiHint: e.target.value})} placeholder="e.g., t-shirt merchandise" className="bg-gray-800 border-gray-700" />
                        </div>
                        <Button type="submit" className="w-full">Add Product</Button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Existing Products</h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                        {products.length > 0 ? products.map(product => (
                            <div key={product.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                                <div>
                                    <p className="font-semibold">{product.name}</p>
                                    <p className="text-sm text-gray-400">{product.price}</p>
                                </div>
                                <Button variant="destructive" size="sm" onClick={() => product.id && handleDeleteProduct(product.id)}>Delete</Button>
                            </div>
                        )) : (
                            <p className="text-gray-500">No products found. Add one to get started.</p>
                        )}
                    </div>
                </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
