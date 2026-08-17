
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, Timestamp, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { Mix } from '@/types/mix';
import { Event } from '@/types/event';
import { Product } from '@/types/product';
import { Blog } from '@/types/blog';
import { Booking } from '@/types/booking';
import { Order } from '@/types/order';
import { Message } from '@/types/message';

// Generic function to get a single document by ID
const getDocument = async <T>(collectionName: string, id: string): Promise<T | null> => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
    }
    return null;
};

// --- Mixes ---
const mixesCollection = collection(db, 'mixes');
export const addMix = async (mixData: Omit<Mix, 'id'>) => addDoc(mixesCollection, { ...mixData, views: 0 });
const FALLBACK_COVER = 'https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg';
const IMAGE_EXT = /\.(jpg|jpeg|png|webp|gif|svg|avif|bmp|ico)(\?.*)?$/i;
const sanitizeCoverUrl = (url: unknown): string => {
    if (typeof url !== 'string') return FALLBACK_COVER;
    // Strip invisible Unicode control/directional characters
    const clean = url.replace(/[‎‏​‌‍﻿]/g, '').trim();
    try {
        const parsed = new URL(clean);
        if (!['http:', 'https:'].includes(parsed.protocol)) return FALLBACK_COVER;
        if (!IMAGE_EXT.test(parsed.pathname)) return FALLBACK_COVER;
        return clean;
    } catch { return FALLBACK_COVER; }
};
export const getMixes = async (): Promise<Mix[]> => (await getDocs(mixesCollection)).docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data, coverUrl: sanitizeCoverUrl(data.coverUrl) } as Mix;
});
export const deleteMix = async (id: string) => deleteDoc(doc(db, 'mixes', id));
export const updateMix = async (id: string, mixData: Partial<Mix>) => updateDoc(doc(db, 'mixes', id), mixData);
export const getMix = (id: string): Promise<Mix | null> => getDocument<Mix>('mixes', id);

// --- Events ---
const eventsCollection = collection(db, 'events');
export const addEvent = async (eventData: Omit<Event, 'id'>) => addDoc(eventsCollection, eventData);
export const getEvents = async (): Promise<Event[]> => (await getDocs(eventsCollection)).docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data, posterUrl: sanitizeCoverUrl(data.posterUrl) } as Event;
});
export const deleteEvent = async (id: string) => deleteDoc(doc(db, 'events', id));
export const updateEvent = async (id: string, eventData: Partial<Event>) => updateDoc(doc(db, 'events', id), eventData);
export const getEvent = (id: string): Promise<Event | null> => getDocument<Event>('events', id);

// --- Products ---
const productsCollection = collection(db, 'products');
export const addProduct = async (productData: Omit<Product, 'id'>) => addDoc(productsCollection, productData);
export const getProducts = async (): Promise<Product[]> => (await getDocs(productsCollection)).docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data, imageUrl: sanitizeCoverUrl(data.imageUrl), hoverImageUrl: data.hoverImageUrl ? sanitizeCoverUrl(data.hoverImageUrl) : undefined } as Product;
});
export const deleteProduct = async (id: string) => deleteDoc(doc(db, 'products', id));
export const updateProduct = async (id: string, productData: Partial<Product>) => updateDoc(doc(db, 'products', id), productData);
export const getProduct = (id: string): Promise<Product | null> => getDocument<Product>('products', id);

// --- Blogs ---
const blogsCollection = collection(db, 'blogs');
export const addBlog = async (blogData: Omit<Blog, 'id'>) => addDoc(blogsCollection, blogData);
export const getBlogs = async (): Promise<Blog[]> => (await getDocs(blogsCollection)).docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data, thumbnailUrl: sanitizeCoverUrl(data.thumbnailUrl) } as Blog;
});
export const deleteBlog = async (id: string) => deleteDoc(doc(db, 'blogs', id));
export const updateBlog = async (id: string, blogData: Partial<Blog>) => updateDoc(doc(db, 'blogs', id), blogData);
export const getBlog = (id: string): Promise<Blog | null> => getDocument<Blog>('blogs', id);

// --- Bookings ---
const bookingsCollection = collection(db, 'bookings');
export const addBooking = async (bookingData: Omit<Booking, 'id'>) => addDoc(bookingsCollection, bookingData);
export const getBookings = async (): Promise<Booking[]> => {
  const snapshot = await getDocs(bookingsCollection);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    if (data.date && data.date instanceof Timestamp) {
      data.date = data.date.toDate();
    }
    return { id: doc.id, ...data } as Booking;
  });
};
export const deleteBooking = async (id: string) => deleteDoc(doc(db, 'bookings', id));

// --- Orders ---
const ordersCollection = collection(db, 'orders');
export const addOrder = async (orderData: Omit<Order, 'id'>) => addDoc(ordersCollection, orderData);
export const getOrders = async (): Promise<Order[]> => (await getDocs(ordersCollection)).docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
export const deleteOrder = async (id: string) => deleteDoc(doc(db, 'orders', id));

// --- Messages ---
const messagesCollection = collection(db, 'messages');
export const addMessage = async (messageData: Omit<Message, 'id'>) => addDoc(messagesCollection, messageData);
export const getMessages = async (): Promise<Message[]> => (await getDocs(messagesCollection)).docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
export const deleteMessage = async (id: string) => deleteDoc(doc(db, 'messages', id));

// --- Site Content (CMS) ---
export const getSiteContent = async <T = any>(key: string): Promise<T | null> => {
    const snap = await getDoc(doc(db, 'siteContent', key));
    return snap.exists() ? (snap.data() as T) : null;
};
export const setSiteContent = async (key: string, data: any) => setDoc(doc(db, 'siteContent', key), data);

    