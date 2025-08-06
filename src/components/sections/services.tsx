import { Button } from "@/components/ui/button";
import { Cake, Sparkles } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: Sparkles,
        title: "Weddings",
        description: "We spin from the heart to create a unique vibe that reflects your style. If you want feel-good music for all ages and an epic dance party, we're the perfect match!",
        imageUrl: "https://placehold.co/600x400",
        aiHint: "wedding party"
    },
    {
        icon: Sparkles,
        title: "Corporate Events",
        description: "Pump up the vibe at your next corporate shindig. We'll spin a modern mix that elevates the mood and gets your team moving on the dance floor.",
        imageUrl: "https://placehold.co/600x400",
        aiHint: "corporate event"
    },
    {
        icon: Sparkles,
        title: "Private Events",
        description: "Anniversaries, milestone Birthdays, or 'Just Because' parties... we do it all! Let us know your vision, and we'll take your party to the next level.",
        imageUrl: "https://placehold.co/600x400",
        aiHint: "private party"
    },
    {
        icon: Sparkles,
        title: "Graduation Parties",
        description: "Celebrate your achievements with the perfect musical backdrop. We'll create a memorable experience for you and your guests.",
        imageUrl: "https://placehold.co/600x400",
        aiHint: "graduation party"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 bg-gray-900/50 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">From intimate gatherings to grand celebrations, we provide the perfect soundtrack for every occasion.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group">
                             <div className="relative h-48 w-full">
                                <Image 
                                    src={service.imageUrl}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    data-ai-hint={service.aiHint}
                                    className="group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors text-xs uppercase tracking-widest font-bold">Learn More</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-primary/10 to-transparent p-8 rounded-lg flex flex-col md:flex-row items-center gap-8 border border-primary/20">
                    <div className="flex-shrink-0">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <Cake className="h-16 w-16 text-primary" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">Special Offer: Kids Birthday DJ Services</h3>
                        <p className="text-gray-400 mb-4">Make your kid's birthday an unforgettable one with an experienced DJ. Unlimited hours of fun, games, and music!</p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-primary">$600</span>
                            <span className="text-gray-400">for unlimited hours</span>
                        </div>
                    </div>
                    <div>
                         <Button size="lg" className="bg-primary text-black hover:bg-white/90 font-bold uppercase tracking-widest">Book Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
