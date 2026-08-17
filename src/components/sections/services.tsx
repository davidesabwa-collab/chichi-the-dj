import { Button } from "@/components/ui/button";
import { Cake, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from '@/lib/firebase/firestore';
import type { ServicesHomeContent, KidsOfferContent } from '@/types/site-content';

const defaultContent: ServicesHomeContent = {
    services: [
        {
            title: "Weddings",
            description: "We spin from the heart to create a unique vibe that reflects your style. If you want feel-good music for all ages and an epic dance party, we're the perfect match!",
            imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nfGVufDB8fHx8MTc1NDQ4NDc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "wedding party",
        },
        {
            title: "Corporate Events",
            description: "Pump up the vibe at your next corporate shindig. We'll spin a modern mix that elevates the mood and gets your team moving on the dance floor.",
            imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxldmVudHxlbnwwfHx8fDE3NTQ0ODUwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "corporate event",
        },
        {
            title: "Private Events",
            description: "Anniversaries, milestone birthdays, or 'Just Because' parties — we do it all! Let us know your vision and we'll take your party to the next level.",
            imageUrl: "https://images.unsplash.com/photo-1515169067868-5387ec356754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8ZGlubmVyfGVufDB8fHx8MTc1NDQ4NTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "private party",
        },
        {
            title: "Graduation Parties",
            description: "Celebrate your achievements with the perfect musical backdrop. We'll create a memorable experience for you and all your guests.",
            imageUrl: "https://images.unsplash.com/photo-1599943821034-8cb5c7526922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxncmFkdWF0aW9uJTIwcGFydHl8ZW58MHx8fHwxNzU0NDg1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "graduation party",
        },
        {
            title: "Retirement Parties",
            description: "Honor a lifetime of hard work with a celebration to remember. We'll mix the perfect blend of classics and favorites to make it a night to cherish.",
            imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            aiHint: "retirement celebration",
        },
        {
            title: "Teen Events",
            description: "Sweet 16s, quinceaneras, and teenage celebrations done right. We know what's trending and how to keep the energy high for a younger crowd.",
            imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            aiHint: "teen party",
        },
        {
            title: "Family Gatherings",
            description: "Family reunions, cultural celebrations, and holiday parties. We play music that brings every generation together and keeps the whole family dancing.",
            imageUrl: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            aiHint: "family gathering",
        },
    ],
};

const defaultKidsOffer: KidsOfferContent = { price: '$800' };

export default async function Services() {
    const [content, kidsOffer] = await Promise.all([
        getSiteContent<ServicesHomeContent>('services-home'),
        getSiteContent<KidsOfferContent>('kids-offer'),
    ]);
    const services = content?.services?.length ? content.services : defaultContent.services;
    const kidsPrice = kidsOffer?.price || defaultKidsOffer.price;

    return (
        <section id="services" className="py-16 sm:py-24 bg-gray-900/50 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        From intimate gatherings to grand celebrations, we provide the perfect soundtrack for every occasion.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, i) => {
                        const isWedding = service.title === 'Weddings';
                        return (
                        <div key={`${service.title}-${i}`} className={`rounded-lg overflow-hidden group ${isWedding ? 'bg-[#141a2e]' : 'bg-gray-900'}`}>
                            <div className="relative h-48 w-full">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={service.aiHint}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className={`h-4 w-4 ${isWedding ? 'text-blue-300' : 'text-primary'}`} />
                                    <h3 className={`text-xl font-bold uppercase tracking-wide ${isWedding ? 'text-blue-300' : 'text-primary'}`}>{service.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                <Button asChild variant="outline" className={isWedding
                                    ? "border-blue-400/60 text-blue-300 hover:bg-blue-300 hover:text-black transition-colors text-xs uppercase tracking-widest font-bold"
                                    : "border-primary text-primary hover:bg-primary hover:text-black transition-colors text-xs uppercase tracking-widest font-bold"}>
                                    <Link href="/#booking">Book Now</Link>
                                </Button>
                            </div>
                        </div>
                        );
                    })}
                </div>

                {/* Kids Birthday Special Offer */}
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
                            <span className="text-4xl font-bold text-primary">{kidsPrice}</span>
                            <span className="text-gray-400">for unlimited hours</span>
                        </div>
                    </div>
                    <div>
                        <Button asChild size="lg" className="bg-primary text-black hover:bg-white/90 font-bold uppercase tracking-widest">
                            <Link href="/#booking">Book Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
