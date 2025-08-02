import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image 
              src="https://placehold.co/600x600"
              alt="Chichi The DJ"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="dj portrait"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary text-glow">It’s all about that beat!</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Chichi The Dj is an experienced, disciplined, and hardworking DJ who takes all events with the seriousness they deserve to make each of them successful. We value and treat all our customers equally and so reservation opportunities are based on first come, first served.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Our vast experience in event organizing, hospitality industry, DJ’ing, and familiarity with vast types of music (dance, pop, Latin, 70s, 80,90, 2000s, R&B, Hip hop, Afrobeat, Amapiano, and many more), in multiple languages makes us your best choice for DJ Services for your next event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
