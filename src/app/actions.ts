'use server';

import { addBooking } from '@/lib/firebase/firestore';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  eventType: z.string().min(1, { message: 'Please select an event type.' }),
  date: z.date({ required_error: 'Please select a date.' }),
  location: z.string().min(2, { message: 'Location is required.' }),
  budget: z.string().optional(),
});

export async function submitBooking(data: unknown) {
  const validatedFields = bookingSchema.safeParse(data);

  if (!validatedFields.success) {
    console.error('Validation Errors:', validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data provided.',
    };
  }
  
  try {
    await addBooking(validatedFields.data);
    return { 
      success: true,
      message: 'Booking request sent successfully!' 
    };
  } catch (error) {
    console.error('Failed to save booking:', error);
    return {
      success: false,
      message: 'An error occurred while sending your request. Please try again.',
    }
  }
}
