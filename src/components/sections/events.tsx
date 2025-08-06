import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const events = [
  {
    title: 'Luv Is Rage 04',
    posterUrl: 'https://placehold.co/400x500',
    aiHint: 'event poster design',
    date: 'Happened 1 week ago',
    location: 'Westlands, Nairobi, Kenya',
    venue: 'Alloy Bar & Lounge, Sarit Centre'
  },
  {
    title: 'M.A.A.D CITY NIGHT',
    posterUrl: 'https://placehold.co/400x500',
    aiHint: 'hip-hop event poster',
    date: 'Happened 1 week ago',
    location: 'Westlands, Mpaka Road, Nairobi, Kenya',
    venue: 'Nairobi Street Kitchen'
  },
  {
    title: 'Afro Beats Day Party',
    posterUrl: 'https://placehold.co/400x500',
    aiHint: 'afro beats poster',
    date: 'Happened 1 month ago',
    location: 'Westlands, Nairobi, Kenya',
    venue: 'Nairobi Street Kitchen'
  },
   {
    title: 'Summer Fest',
    posterUrl: 'https://placehold.co/400x500',
    aiHint: 'summer party poster',
    date: 'Upcoming in 2 weeks',
    location: 'Seattle, WA',
    venue: 'Gas Works Park'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Events
            </h2>
            <p className="mt-2 text-gray-400">Check all past and upcoming events that Chichi The DJ will be performing. <br />
                <Link href="#" className="text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors">
                    All Events
                </Link>
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event) => (
            <Link href="#" key={event.title} className="group">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-3">
                    <Image
                        src={event.posterUrl}
                        alt={`Poster for ${event.title}`}
                        fill
                        className="object-cover rounded-md group-hover:scale-105 transition-transform"
                        data-ai-hint={event.aiHint}
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
      </div>
    </section>
  );
}
