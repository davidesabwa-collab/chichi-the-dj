
import { getEvent, getEvents } from '@/lib/firebase/firestore';
import { Event } from '@/types/event';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

type EventPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventPage({ params }: EventPageProps) {
  const event: Event | null = await getEvent(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
            <Link href="/events" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to All Events
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                    src={event.posterUrl}
                    alt={`Poster for ${event.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={event.aiHint}
                    />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
                    <div className="space-y-4 text-gray-300">
                        <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>{event.venue} - {event.location}</span>
                        </div>
                    </div>
                    <p className="mt-6 text-gray-400">
                        Join Chichi The DJ for an unforgettable experience at {event.title}. Get ready for an amazing night of music and dancing.
                    </p>
                    <Button asChild size="lg" className="mt-8 w-full md:w-auto">
                        <Link href="/#booking">Book Tickets</Link>
                    </Button>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    