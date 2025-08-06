import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1526979118433-63c7344f06f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkanxlbnwwfHx8fDE3NTQ0OTMwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chichi The DJ mixing"
                layout="fill"
                objectFit="cover"
                data-ai-hint="dj mixing music"
                className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">About Chichi The DJ</h2>
            <p className="text-gray-400 mb-4">
              A good DJ is the key to your event’s success. Chichi The DJ is a professional, experienced, and disciplined DJ who takes all events with the seriousness they deserve to make each of them successful.
            </p>
            <p className="text-gray-400 mb-6">
              Our vast experience in events organizing, hospitality industry, Quality sound system, DJ’ing, and familiarity with vast types of music (dance music, pop music, Latin music, 70s, 80,90, 2000s, R&B, Hip hop, Afrobeat, Amapiano, and many more), in multiple languages makes us your best choice for DJ Services for your next event.
            </p>
            <Button asChild size="lg" className="bg-primary text-black hover:bg-white/90 font-bold uppercase tracking-widest">
                <Link href="#booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
