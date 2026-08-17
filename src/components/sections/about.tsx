import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Radio } from "lucide-react";
import { getSiteContent } from '@/lib/firebase/firestore';
import type { AboutHomeContent } from '@/types/site-content';

const defaultContent: AboutHomeContent = {
    imageUrl: "https://images.unsplash.com/photo-1526979118433-63c7344f06f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkanxlbnwwfHx8fDE3NTQ0OTMwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    paragraph1: "A good DJ is the key to your event's success. Chichi The DJ is a professional, experienced, and disciplined DJ who takes all events with the seriousness they deserve to make each of them successful.",
    paragraph2: "Our vast experience in events organizing, hospitality industry, quality sound systems, DJ'ing, and familiarity with vast types of music — dance, pop, Latin, 70s–90s, R&B, Hip Hop, Afrobeat, Amapiano, and many more — in multiple languages makes us your best choice for any event. Chichi is also a recent graduate with an Associate Degree in Business Management & Cybersecurity.",
    radioCredits: ['Muuga FM', 'Hot 96', 'Triple-A FM'],
};

export default async function About() {
    const content = (await getSiteContent<AboutHomeContent>('about-home')) || defaultContent;
    const radioCredits = content.radioCredits?.length ? content.radioCredits : defaultContent.radioCredits;

  return (
    <section id="about" className="py-16 sm:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={content.imageUrl || defaultContent.imageUrl}
              alt="Chichi The DJ mixing"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="dj mixing music"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">About Chichi The DJ</h2>
            <p className="text-gray-400 mb-4">
              {content.paragraph1 || defaultContent.paragraph1}
            </p>
            <p className="text-gray-400 mb-6">
              {content.paragraph2 || defaultContent.paragraph2}
            </p>

            {/* Radio credibility */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="flex items-center gap-2 text-primary">
                <Radio className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Featured on:</span>
              </div>
              {radioCredits.map((station) => (
                <span key={station} className="text-xs border border-primary/40 text-primary px-3 py-1 rounded-full">
                  {station}
                </span>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary text-black hover:bg-white/90 font-bold uppercase tracking-widest">
              <Link href="#booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
