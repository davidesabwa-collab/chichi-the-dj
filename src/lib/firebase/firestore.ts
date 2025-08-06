
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Mix } from '@/types/mix';
import { Event } from '@/types/event';
import { Product } from '@/types/product';
import { Blog } from '@/types/blog';

// Mixes Collection
const mixesCollection = collection(db, 'mixes');

// Add a new mix
export const addMix = async (mixData: Omit<Mix, 'id'>): Promise<string> => {
  const docRef = await addDoc(mixesCollection, mixData);
  return docRef.id;
};

// Get all mixes
export const getMixes = async (): Promise<Mix[]> => {
  const snapshot = await getDocs(mixesCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Mix));
};

// Delete a mix
export const deleteMix = async (id: string): Promise<void> => {
  const mixDoc = doc(db, 'mixes', id);
  await deleteDoc(mixDoc);
};

// Events Collection
const eventsCollection = collection(db, 'events');

// Add a new event
export const addEvent = async (eventData: Omit<Event, 'id'>): Promise<string> => {
    const docRef = await addDoc(eventsCollection, eventData);
    return docRef.id;
};

// Get all events
export const getEvents = async (): Promise<Event[]> => {
    const snapshot = await getDocs(eventsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
};

// Delete an event
export const deleteEvent = async (id: string): Promise<void> => {
    const eventDoc = doc(db, 'events', id);
    await deleteDoc(eventDoc);
};

// Products Collection
const productsCollection = collection(db, 'products');

// Add a new product
export const addProduct = async (productData: Omit<Product, 'id'>): Promise<string> => {
    const docRef = await addDoc(productsCollection, productData);
    return docRef.id;
};

// Get all products
export const getProducts = async (): Promise<Product[]> => {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
};

// Delete a product
export const deleteProduct = async (id: string): Promise<void> => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
};

// Blogs Collection
const blogsCollection = collection(db, 'blogs');

// Add a new blog
export const addBlog = async (blogData: Omit<Blog, 'id'>): Promise<string> => {
    const docRef = await addDoc(blogsCollection, blogData);
    return docRef.id;
};

// Get all blogs
export const getBlogs = async (): Promise<Blog[]> => {
    const snapshot = await getDocs(blogsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
};

// Delete a blog
export const deleteBlog = async (id: string): Promise<void> => {
    const blogDoc = doc(db, 'blogs', id);
    await deleteDoc(blogDoc);
};
