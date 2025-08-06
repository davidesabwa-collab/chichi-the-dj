
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Mix } from '@/types/mix';

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
