
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Mix } from '@/types/mix';
import { Event } from '@/types/event';

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
