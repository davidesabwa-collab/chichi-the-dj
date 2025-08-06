
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { getEvents } from '@/lib/firebase/firestore';
import { Event } from '@/types/event';

export default async function Events() {
  const events: Event[] = await getEvents();
  const recentEvents = events.slice(0, 4);

  return (
    <section id="events" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Events
            </h2>
            <p className="mt-2 text-gray-400">Check all past and upcoming events that Chichi The DJ will be performing.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {recentEvents.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id} className="group">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-3">
                    <Image
                        src={event.posterUrl}
                        alt={`Poster for ${event.title}`}
                        fill
                        className="object-cover rounded-md group-hover:scale-105 transition-transform"
                        data-ai-hint={event.aiHint || 'event poster'}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-gray-100 group-hover:underline">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date}</p>
                    <div className="flex items-start gap-2 text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>{event.venue}</span>
                    </div>
                </div>
                <Button variant="secondary" className="w-full mt-3 bg-gray-800 text-white hover:bg-gray-700">View Event</Button>
            </Link>
          ))}
        </div>
         {events.length > 4 && (
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                    <Link href="/events">All Events</Link>
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}

    