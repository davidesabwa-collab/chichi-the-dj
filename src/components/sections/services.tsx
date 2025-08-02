import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    title: 'Weddings',
    description: "Relax and dance... We love music, and what we really love, is dropping big beats for you on your big day. We spin music from the heart to create a truly unique vibe that reflects your style and personality.",
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'wedding dance'
  },
  {
    title: 'Corporate Events',
    description: "Pump up the vibe at your next corporate shindig. We can spin a modern mix that elevates the mood of the room and gets your company peeps moving on the dance floor when it’s time to let loose.",
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'corporate event'
  },
  {
    title: 'Private Events',
    description: "We can rock any event and any crowd. Anniversaries, milestone Birthdays, Bar/Bat Mitzvahs, School Dances, Graduation parties, or Just Because parties… we do it all!",
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'private party'
  },
  {
    title: 'Graduation Parties',
    description: "Celebrate your achievements with the perfect musical backdrop. We provide a fun, energetic atmosphere to make your graduation party a memorable success.",
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'graduation party'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
                Our Services
            </h2>
            <p className="mt-2 text-lg max-w-2xl mx-auto text-foreground/70">Whatever the occasion, we bring the energy and the beats.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group overflow-hidden bg-card border-transparent hover:border-primary/50 transition-all duration-300">
                <div className="w-full aspect-video relative overflow-hidden">
                    <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={service.aiHint}
                    />
                </div>
                <div className="p-6">
                    <CardHeader className="p-0">
                        <CardTitle className="text-2xl font-bold text-primary group-hover:text-glow transition-all duration-300">{service.title}</CardTitle>
                    </CardHeader>
                    <CardDescription className="mt-2 text-base text-foreground/80">
                        {service.description}
                    </CardDescription>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
