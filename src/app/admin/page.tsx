
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { addMix, getMixes, deleteMix, updateMix, addEvent, getEvents, deleteEvent, updateEvent, addProduct, getProducts, deleteProduct, updateProduct, addBlog, getBlogs, deleteBlog, updateBlog, getBookings, deleteBooking, getOrders, deleteOrder, getMessages, deleteMessage, getSiteContent, setSiteContent } from '@/lib/firebase/firestore';
import { SITE_CONTENT_SCHEMAS } from '@/lib/site-content-schemas';
import { SiteContentForm } from '@/components/admin/site-content-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mix } from '@/types/mix';
import { Event } from '@/types/event';
import { Product } from '@/types/product';
import { Blog } from '@/types/blog';
import { Booking } from '@/types/booking';
import { Order } from '@/types/order';
import { Message } from '@/types/message';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const [mixes, setMixes] = useState<Mix[]>([]);
  const [newMix, setNewMix] = useState<Omit<Mix, 'id' | 'views'>>({ title: '', coverUrl: '', genre: '', date: '', platform: 'Other', platformUrl: '', audioUrl: '' });
  const [editingMix, setEditingMix] = useState<Mix | null>(null);

  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({ title: '', posterUrl: '', aiHint: '', date: '', location: '', venue: '' });
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, imageUrl: '', hoverImageUrl: '', aiHint: '' });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', thumbnailUrl: '', aiHint: '', date: '' });
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const [siteContent, setSiteContentMap] = useState<Record<string, any>>({});
  const [editingContentKey, setEditingContentKey] = useState<string | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchData();
      } else {
        router.push('/login');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchData = async () => {
    fetchMixes();
    fetchEvents();
    fetchProducts();
    fetchBlogs();
    fetchBookings();
    fetchOrders();
    fetchMessages();
    fetchSiteContent();
  };

  const fetchMixes = async () => setMixes(await getMixes());
  const fetchEvents = async () => setEvents(await getEvents());
  const fetchProducts = async () => setProducts(await getProducts());
  const fetchBlogs = async () => setBlogs(await getBlogs());
  const fetchBookings = async () => setBookings(await getBookings());
  const fetchOrders = async () => setOrders(await getOrders());
  const fetchMessages = async () => setMessages(await getMessages());
  const fetchSiteContent = async () => {
    const entries = await Promise.all(
      SITE_CONTENT_SCHEMAS.map(async (schema) => [schema.key, (await getSiteContent(schema.key)) || {}] as const)
    );
    setSiteContentMap(Object.fromEntries(entries));
  };

  const handleSaveSiteContent = async (key: string, data: Record<string, any>) => {
    try {
      await setSiteContent(key, data);
      toast({ title: 'Content Updated', description: `${SITE_CONTENT_SCHEMAS.find(s => s.key === key)?.label} has been saved.` });
      setSiteContentMap((prev) => ({ ...prev, [key]: data }));
      setEditingContentKey(null);
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Failed to Save', description: error.message });
    }
  };


  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({ title: 'Signed Out', description: 'You have been successfully signed out.' });
      router.push('/');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Sign Out Failed', description: error.message });
    }
  };

  const handleAdd = async (e: React.FormEvent, addFunc: (data: any) => Promise<any>, data: any, resetState: () => void, fetchFunc: () => void, itemName: string) => {
    e.preventDefault();
    if (Object.values(data).some(val => val === '')) {
      toast({ variant: 'destructive', title: 'Missing Fields', description: `Please fill out all required fields to add a new ${itemName}.` });
      return;
    }
    try {
      await addFunc(data);
      toast({ title: `${itemName} Added`, description: `The new ${itemName} has been successfully added.` });
      resetState();
      fetchFunc();
    } catch (error: any) {
      toast({ variant: 'destructive', title: `Failed to Add ${itemName}`, description: error.message });
    }
  };

  const handleDelete = async (id: string, deleteFunc: (id: string) => Promise<void>, fetchFunc: () => void, itemName: string) => {
    try {
      await deleteFunc(id);
      toast({ title: `${itemName} Deleted`, description: `The ${itemName} has been successfully deleted.` });
      fetchFunc();
    } catch (error: any) {
      toast({ variant: 'destructive', title: `Failed to Delete ${itemName}`, description: error.message });
    }
  };

  const handleUpdate = async (e: React.FormEvent, updateFunc: (id: string, data: any) => Promise<void>, item: any, setEditingItem: (item: any) => void, fetchFunc: () => void, itemName: string) => {
    e.preventDefault();
    if (!item || !item.id) return;
    try {
      await updateFunc(item.id, item);
      toast({ title: `${itemName} Updated`, description: `The ${itemName} has been successfully updated.` });
      setEditingItem(null);
      fetchFunc();
      setIsDialogOpen(false);
    } catch (error: any) {
      toast({ variant: 'destructive', title: `Failed to Update ${itemName}`, description: error.message });
    }
  };

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-black"><p className="text-white">Loading...</p></div>;
  }
  
  const renderEditDialog = (item: any, setItem: (item: any) => void, fields: {key: string, label: string, type?: string, options?: string[]}[], handleSubmit: (e: React.FormEvent) => void, title: string) => (
    <Dialog open={isDialogOpen && item} onOpenChange={(open) => !open && setIsDialogOpen(false)}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle>Edit {title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(field => (
            <div key={field.key}>
              <Label htmlFor={`edit-${field.key}`}>{field.label}</Label>
              {field.type === 'textarea' ? (
                 <Textarea id={`edit-${field.key}`} value={item?.[field.key] || ''} onChange={(e) => setItem({...item, [field.key]: e.target.value})} className="bg-gray-800 border-gray-700" />
              ) : field.type === 'select' ? (
                <Select value={item?.[field.key] || ''} onValueChange={(value) => setItem({...item, [field.key]: value})}>
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder={`Select a ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                  </SelectContent>
                </Select>
              ) : (
                <Input id={`edit-${field.key}`} type={field.type || 'text'} value={item?.[field.key] || ''} onChange={(e) => setItem({...item, [field.key]: e.target.value})} className="bg-gray-800 border-gray-700" />
              )}
            </div>
          ))}
          <Button type="submit" className="w-full">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );

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
           {/* Manage Site Content */}
           <div id="manage-site-content">
            <h2 className="text-2xl font-bold mb-2 border-b border-gray-700 pb-4">Manage Site Content</h2>
            <p className="text-gray-500 text-sm mb-6">Edit the images and text used across every page — homepage sections, About, Services, Gallery, FAQ, header, footer, and contact info.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SITE_CONTENT_SCHEMAS.map((schema) => (
                <Card key={schema.key} className="bg-gray-800 border-gray-700 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{schema.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-gray-400">{schema.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => setEditingContentKey(schema.key)}>Edit</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <Separator className="bg-gray-700"/>

           {/* Manage Messages */}
           <div id="manage-messages">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Messages</h2>
            <div className="space-y-4">
              {messages.length > 0 ? messages.map(message => (
                <Card key={message.id} className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl">{message.subject}</CardTitle>
                    <Button variant="destructive" size="sm" onClick={() => message.id && handleDelete(message.id, deleteMessage, fetchMessages, 'Message')}>Delete</Button>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <p><strong className="text-gray-400">From:</strong> {message.name} ({message.email})</p>
                     <p>{message.message}</p>
                  </CardContent>
                </Card>
              )) : (
                 <p className="text-gray-500">No messages yet.</p>
              )}
            </div>
          </div>
          <Separator className="bg-gray-700"/>

          {/* Manage Orders */}
          <div id="manage-orders">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Orders</h2>
            <div className="space-y-4">
              {orders.length > 0 ? orders.map(order => (
                <Card key={order.id} className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Order from {order.customerName}</CardTitle>
                    <Button variant="destructive" size="sm" onClick={() => order.id && handleDelete(order.id, deleteOrder, fetchOrders, 'Order')}>Delete</Button>
                  </CardHeader>
                  <CardContent>
                    <p><strong className="text-gray-400">Email:</strong> {order.customerEmail}</p>
                    <p><strong className="text-gray-400">Address:</strong> {order.shippingAddress}</p>
                    <p><strong className="text-gray-400">Total:</strong> ${order.totalAmount.toFixed(2)}</p>
                    <Separator className="my-4 bg-gray-700" />
                    <h4 className="font-semibold mb-2">Items:</h4>
                    <ul className="list-disc pl-5 text-gray-400">
                      {order.items.map(item => <li key={item.id}>{item.name} x {item.quantity}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              )) : (
                <p className="text-gray-500">No orders yet.</p>
              )}
            </div>
          </div>
          <Separator className="bg-gray-700"/>

          {/* Manage Bookings */}
          <div id="manage-bookings">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Bookings</h2>
            <div className="space-y-4">
              {bookings.length > 0 ? bookings.map(booking => (
                <Card key={booking.id} className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl">{booking.eventType}</CardTitle>
                    <Button variant="destructive" size="sm" onClick={() => booking.id && handleDelete(booking.id, deleteBooking, fetchBookings, 'Booking')}>Delete</Button>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <p><strong className="text-gray-400">Name:</strong> {booking.name}</p>
                    <p><strong className="text-gray-400">Email:</strong> {booking.email}</p>
                    <p><strong className="text-gray-400">Date:</strong> {format(booking.date, "PPP")}</p>
                    <p><strong className="text-gray-400">Location:</strong> {booking.location}</p>
                    {booking.budget && <p><strong className="text-gray-400">Budget:</strong> {booking.budget}</p>}
                  </CardContent>
                </Card>
              )) : (
                 <p className="text-gray-500">No booking requests yet.</p>
              )}
            </div>
          </div>
          <Separator className="bg-gray-700"/>

          {/* Manage Mixes */}
          <div id="manage-mixes">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Mixes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-xl font-bold mb-4">Add a New Mix</h3>
                  <form onSubmit={(e) => handleAdd(e, addMix, newMix, () => setNewMix({ title: '', coverUrl: '', genre: '', date: '', platform: 'Other', platformUrl: '', audioUrl: '' }), fetchMixes, 'Mix')} className="space-y-4">
                      <Input value={newMix.title} onChange={(e) => setNewMix({...newMix, title: e.target.value})} placeholder="Title" className="bg-gray-800 border-gray-700" />
                      <Input value={newMix.coverUrl} onChange={(e) => setNewMix({...newMix, coverUrl: e.target.value})} placeholder="Cover URL" className="bg-gray-800 border-gray-700" />
                      <Input value={newMix.genre} onChange={(e) => setNewMix({...newMix, genre: e.target.value})} placeholder="Genre" className="bg-gray-800 border-gray-700" />
                      <Input value={newMix.date} onChange={(e) => setNewMix({...newMix, date: e.target.value})} placeholder="Date (e.g., 1 month ago)" className="bg-gray-800 border-gray-700" />
                      <Select value={newMix.platform} onValueChange={(value: Mix['platform']) => setNewMix({...newMix, platform: value})}>
                        <SelectTrigger className="bg-gray-800 border-gray-700"><SelectValue placeholder="Select Platform" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="YouTube">YouTube</SelectItem>
                          <SelectItem value="Mixcloud">Mixcloud</SelectItem>
                          <SelectItem value="Audiomack">Audiomack</SelectItem>
                          <SelectItem value="HearThisAt">HearThisAt</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input value={newMix.platformUrl} onChange={(e) => setNewMix({...newMix, platformUrl: e.target.value})} placeholder="Platform URL" className="bg-gray-800 border-gray-700" />
                      <Input value={newMix.audioUrl} onChange={(e) => setNewMix({...newMix, audioUrl: e.target.value})} placeholder="Audio File URL" className="bg-gray-800 border-gray-700" />
                      <Button type="submit" className="w-full">Add Mix</Button>
                  </form>
              </div>
              <div>
                  <h3 className="text-xl font-bold mb-4">Existing Mixes</h3>
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                      {mixes.map(mix => (
                          <div key={mix.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                              <p className="font-semibold">{mix.title}</p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => { setEditingMix(mix); setIsDialogOpen(true); }}>Edit</Button>
                                <Button variant="destructive" size="sm" onClick={() => mix.id && handleDelete(mix.id, deleteMix, fetchMixes, 'Mix')}>Delete</Button>
                              </div>
                          </div>
                      ))}
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
                    <form onSubmit={(e) => handleAdd(e, addEvent, newEvent, () => setNewEvent({ title: '', posterUrl: '', aiHint: '', date: '', location: '', venue: '' }), fetchEvents, 'Event')} className="space-y-4">
                        <Input value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} placeholder="Title" className="bg-gray-800 border-gray-700" />
                        <Input value={newEvent.posterUrl} onChange={(e) => setNewEvent({...newEvent, posterUrl: e.target.value})} placeholder="Poster URL" className="bg-gray-800 border-gray-700" />
                        <Input value={newEvent.aiHint} onChange={(e) => setNewEvent({...newEvent, aiHint: e.target.value})} placeholder="AI Hint" className="bg-gray-800 border-gray-700" />
                        <Input type="date" value={newEvent.date} onChange={(e) => setNewEvent({...newEvent, date: e.target.value})} className="bg-gray-800 border-gray-700" />
                        <Input value={newEvent.location} onChange={(e) => setNewEvent({...newEvent, location: e.target.value})} placeholder="Location" className="bg-gray-800 border-gray-700" />
                        <Input value={newEvent.venue} onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})} placeholder="Venue" className="bg-gray-800 border-gray-700" />
                        <Button type="submit" className="w-full">Add Event</Button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Existing Events</h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                        {events.map(event => (
                            <div key={event.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold">{event.title}</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={() => { setEditingEvent(event); setIsDialogOpen(true); }}>Edit</Button>
                                    <Button variant="destructive" size="sm" onClick={() => event.id && handleDelete(event.id, deleteEvent, fetchEvents, 'Event')}>Delete</Button>
                                </div>
                            </div>
                        ))}
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
                    <form onSubmit={(e) => handleAdd(e, addProduct, newProduct, () => setNewProduct({ name: '', price: 0, imageUrl: '', hoverImageUrl: '', aiHint: '' }), fetchProducts, 'Product')} className="space-y-4">
                        <Input value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} placeholder="Product Name" className="bg-gray-800 border-gray-700" />
                        <Input type="number" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value) || 0})} placeholder="Price" className="bg-gray-800 border-gray-700" />
                        <Input value={newProduct.imageUrl} onChange={(e) => setNewProduct({...newProduct, imageUrl: e.target.value})} placeholder="Image URL" className="bg-gray-800 border-gray-700" />
                        <Input value={newProduct.hoverImageUrl} onChange={(e) => setNewProduct({...newProduct, hoverImageUrl: e.target.value})} placeholder="Hover Image URL (Optional)" className="bg-gray-800 border-gray-700" />
                        <Input value={newProduct.aiHint} onChange={(e) => setNewProduct({...newProduct, aiHint: e.target.value})} placeholder="AI Hint" className="bg-gray-800 border-gray-700" />
                        <Button type="submit" className="w-full">Add Product</Button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Existing Products</h3>
                     <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                        {products.map(product => (
                            <div key={product.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold">{product.name}</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" onClick={() => { setEditingProduct(product); setIsDialogOpen(true); }}>Edit</Button>
                                  <Button variant="destructive" size="sm" onClick={() => product.id && handleDelete(product.id, deleteProduct, fetchProducts, 'Product')}>Delete</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
          <Separator className="bg-gray-700"/>

           {/* Manage Blog */}
          <div id="manage-blog">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Manage Blog</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Add a New Blog Post</h3>
                    <form onSubmit={(e) => handleAdd(e, addBlog, newBlog, () => setNewBlog({ title: '', content: '', thumbnailUrl: '', aiHint: '', date: '' }), fetchBlogs, 'Blog Post')} className="space-y-4">
                        <Input value={newBlog.title} onChange={(e) => setNewBlog({...newBlog, title: e.target.value})} placeholder="Title" className="bg-gray-800 border-gray-700" />
                        <Textarea value={newBlog.content} onChange={(e) => setNewBlog({...newBlog, content: e.target.value})} placeholder="Content" className="bg-gray-800 border-gray-700" />
                        <Input value={newBlog.thumbnailUrl} onChange={(e) => setNewBlog({...newBlog, thumbnailUrl: e.target.value})} placeholder="Thumbnail URL" className="bg-gray-800 border-gray-700" />
                        <Input value={newBlog.aiHint} onChange={(e) => setNewBlog({...newBlog, aiHint: e.target.value})} placeholder="AI Hint" className="bg-gray-800 border-gray-700" />
                        <Input type="date" value={newBlog.date} onChange={(e) => setNewBlog({...newBlog, date: e.target.value})} placeholder="Date" className="bg-gray-800 border-gray-700" />
                        <Button type="submit" className="w-full">Add Blog Post</Button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Existing Posts</h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                        {blogs.map(blog => (
                            <div key={blog.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold">{blog.title}</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" onClick={() => { setEditingBlog(blog); setIsDialogOpen(true); }}>Edit</Button>
                                  <Button variant="destructive" size="sm" onClick={() => blog.id && handleDelete(blog.id, deleteBlog, fetchBlogs, 'Blog Post')}>Delete</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {renderEditDialog(editingMix, setEditingMix, [
          { key: 'title', label: 'Title' }, { key: 'coverUrl', label: 'Cover URL' }, { key: 'genre', label: 'Genre' }, { key: 'date', label: 'Date' },
          { key: 'platform', label: 'Platform', type: 'select', options: ['YouTube', 'Mixcloud', 'Audiomack', 'HearThisAt', 'Other']},
          { key: 'platformUrl', label: 'Platform URL' }, { key: 'audioUrl', label: 'Audio File URL' }
      ], (e) => handleUpdate(e, updateMix, editingMix, setEditingMix, fetchMixes, 'Mix'), 'Mix')}

      {renderEditDialog(editingEvent, setEditingEvent, [
          { key: 'title', label: 'Title' }, { key: 'posterUrl', label: 'Poster URL' }, { key: 'aiHint', label: 'AI Hint' }, { key: 'date', label: 'Date', type: 'date' }, { key: 'location', label: 'Location' }, { key: 'venue', label: 'Venue' }
      ], (e) => handleUpdate(e, updateEvent, editingEvent, setEditingEvent, fetchEvents, 'Event'), 'Event')}
      
      {renderEditDialog(editingProduct, setEditingProduct, [
          { key: 'name', label: 'Name' }, { key: 'price', label: 'Price', type: 'number' }, { key: 'imageUrl', label: 'Image URL' }, { key: 'hoverImageUrl', label: 'Hover Image URL' }, { key: 'aiHint', label: 'AI Hint' }
      ], (e) => handleUpdate(e, updateProduct, editingProduct, setEditingProduct, fetchProducts, 'Product'), 'Product')}

      {renderEditDialog(editingBlog, setEditingBlog, [
          { key: 'title', label: 'Title' }, { key: 'content', label: 'Content', type: 'textarea' }, { key: 'thumbnailUrl', label: 'Thumbnail URL' }, { key: 'aiHint', label: 'AI Hint' }, { key: 'date', label: 'Date', type: 'date' }
      ], (e) => handleUpdate(e, updateBlog, editingBlog, setEditingBlog, fetchBlogs, 'Blog'), 'Blog Post')}

      <Dialog open={!!editingContentKey} onOpenChange={(open) => !open && setEditingContentKey(null)}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit {SITE_CONTENT_SCHEMAS.find(s => s.key === editingContentKey)?.label}</DialogTitle>
          </DialogHeader>
          {editingContentKey && (
            <SiteContentForm
              fields={SITE_CONTENT_SCHEMAS.find(s => s.key === editingContentKey)!.fields}
              initialData={siteContent[editingContentKey] || {}}
              onSave={(data) => handleSaveSiteContent(editingContentKey, data)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
