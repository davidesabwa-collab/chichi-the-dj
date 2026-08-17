import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Radio, Music, Award, Users, GraduationCap, MapPin } from 'lucide-react';
import { getSiteContent } from '@/lib/firebase/firestore';
import { SiteIcon } from '@/lib/site-icons';
import type { AboutPageContent } from '@/types/site-content';

export const metadata: Metadata = {
    title: 'About',
    description: 'Meet Chichi The DJ — a professional, experienced Seattle-based DJ with 10+ years in weddings, corporate events, and private parties. Featured on Muuga FM, Hot 96, and Triple-A FM.',
    keywords: ['Chichi The DJ', 'Seattle DJ', 'professional DJ', 'wedding DJ Seattle', 'about DJ Chichi'],
    openGraph: {
        title: 'About Chichi The DJ | Seattle Professional DJ',
        description: 'Meet Chichi The DJ — 10+ years of experience, 500+ events, featured on Muuga FM, Hot 96, and Triple-A FM.',
        url: 'https://www.chichithedj.us/about',
    },
};

const defaultContent: AboutPageContent = {
    imageUrl: "https://images.unsplash.com/photo-1526979118433-63c7344f06f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    eyebrow: 'The DJ Behind The Beat',
    paragraph1: "A good DJ is the key to your event's success. Chichi The DJ is a professional, experienced, and disciplined DJ who takes all events with the seriousness they deserve to make each of them successful.",
    paragraph2: "With vast experience in event organizing, the hospitality industry, quality sound systems, and a deep familiarity with music across 50+ genres and multiple languages, Chichi The DJ is your best choice for any event — from intimate private gatherings to large corporate celebrations.",
    paragraph3: "Chichi is also a recent graduate with an Associate Degree in Business Management & Cybersecurity, bringing a sharp, professional mindset to every booking.",
    radioCredits: ['Muuga FM', 'Hot 96', 'Triple-A FM'],
    highlights: [
        { icon: 'Award', label: '10+ Years', sub: 'of professional DJing' },
        { icon: 'Users', label: '500+ Events', sub: 'hosted across the Pacific Northwest' },
        { icon: 'Music', label: '50+ Genres', sub: 'from Afrobeat to Zilizopendwa' },
        { icon: 'Radio', label: '3 Radio Stations', sub: 'Muuga FM · Hot 96 · Triple-A FM' },
    ],
    genres: [
        'Afrobeat', 'Amapiano', 'Reggae', 'Dancehall', 'Hip Hop', 'R&B',
        'Kikuyu / Mugithi', 'Ohangla / Benga', 'Soukous / Ndombolo', 'Gospel',
        'Latin', 'Pop', 'Soul', 'Classic Rock', '70s–90s Classics', 'Bongo Flava',
        'Kalenjin', 'Ugandan', 'Swahili', 'Arbantone',
    ],
    educationText: 'Associate Degree in Business Management & Cybersecurity — bringing a disciplined, professional mindset to every event.',
    radioExperienceText: 'Featured on Muuga FM, Hot 96, and Triple-A FM — bringing broadcast-level curation and energy to live events.',
    eventExperienceText: '500+ events including weddings, corporate functions, cultural days, graduation parties, private parties, and club nights across the Pacific Northwest.',
};

export default async function AboutPage() {
    const content = (await getSiteContent<AboutPageContent>('about-page')) || defaultContent;
    const highlights = content.highlights?.length ? content.highlights : defaultContent.highlights;
    const genres = content.genres?.length ? content.genres : defaultContent.genres;
    const radioCredits = content.radioCredits?.length ? content.radioCredits : defaultContent.radioCredits;

    return (
        <>
            <Header />
            <main className="bg-black text-white min-h-screen">
                {/* Hero */}
                <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                                <Image
                                    src={content.imageUrl || defaultContent.imageUrl}
                                    alt="Chichi The DJ performing"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center gap-2 text-primary">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm font-semibold">Seattle, WA</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">{content.eyebrow || defaultContent.eyebrow}</p>
                                <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider mb-6">About Chichi The DJ</h1>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    {content.paragraph1 || defaultContent.paragraph1}
                                </p>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {content.paragraph2 || defaultContent.paragraph2}
                                </p>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {content.paragraph3 || defaultContent.paragraph3}
                                </p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {radioCredits.map((s) => (
                                        <span key={s} className="flex items-center gap-1.5 text-xs border border-primary/40 text-primary px-3 py-1.5 rounded-full">
                                            <Radio className="h-3 w-3" /> {s}
                                        </span>
                                    ))}
                                </div>
                                <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest">
                                    <Link href="/contact">Book Chichi Today</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-[#141a2e] py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {highlights.map((h) => (
                                <div key={h.label}>
                                    <div className="flex justify-center mb-2">
                                        <SiteIcon name={h.icon} className="h-8 w-8 text-white/70" />
                                    </div>
                                    <p className="text-3xl font-extrabold text-white">{h.label}</p>
                                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mt-1">{h.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Music Genres */}
                <section className="py-16 sm:py-24 bg-gray-900/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">Music Genres</h2>
                            <p className="text-gray-400">
                                Fluent in 50+ genres across multiple languages. From the latest Afrobeat to East African classics, Chichi reads the crowd and delivers exactly what the moment needs.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {genres.map((g) => (
                                <span key={g} className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-primary hover:text-primary transition-colors">
                                    {g}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education & Background */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-8 text-center">Background</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start bg-gray-900 border border-gray-800 rounded-lg p-6">
                                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Education</h3>
                                    <p className="text-gray-400">{content.educationText || defaultContent.educationText}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start bg-gray-900 border border-gray-800 rounded-lg p-6">
                                <Radio className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Radio Experience</h3>
                                    <p className="text-gray-400">{content.radioExperienceText || defaultContent.radioExperienceText}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start bg-gray-900 border border-gray-800 rounded-lg p-6">
                                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Event Experience</h3>
                                    <p className="text-gray-400">{content.eventExperienceText || defaultContent.eventExperienceText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gray-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to make your event unforgettable?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Reservations are first come, first served. Secure your date with a deposit today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest">
                                <Link href="/contact">Book Now</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors font-bold uppercase tracking-widest">
                                <Link href="/services">View Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
