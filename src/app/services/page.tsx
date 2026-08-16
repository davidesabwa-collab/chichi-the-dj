import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Cake, Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Chichi The DJ offers professional DJ services for weddings, corporate events, private parties, graduations, retirement parties, teen events, family gatherings, and kids birthdays in Seattle, WA.',
    keywords: ['Seattle DJ services', 'wedding DJ Seattle', 'corporate DJ Seattle', 'kids birthday DJ', 'DJ hire Seattle', 'Chichi The DJ services'],
    openGraph: {
        title: 'DJ Services | Chichi The DJ Official',
        description: 'Professional DJ services for every occasion — weddings, corporate events, private parties, graduations, and more in Seattle, WA.',
        url: 'https://www.chichithedj.us/services',
    },
};

const services = [
    {
        title: 'Weddings',
        price: 'Custom Quote',
        description: 'We spin from the heart to create a unique vibe that reflects your style. Feel-good music for all ages, from cocktail hour to the last dance.',
        features: ['Ceremony, cocktail & reception music', 'MC services & announcements', 'Custom playlist consultation', 'Professional sound & lighting', 'Multilingual music selection'],
        imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'wedding reception',
    },
    {
        title: 'Corporate Events',
        price: 'Custom Quote',
        description: 'Elevate your company event with a professional DJ who understands corporate culture and keeps the energy appropriate for your brand.',
        features: ['Background music during dinners', 'Dance floor DJ sets', 'Award ceremony background scores', 'Professional & polished delivery', 'Volume-appropriate mixes'],
        imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'corporate event',
    },
    {
        title: 'Private Parties',
        price: 'Custom Quote',
        description: 'Anniversaries, milestone birthdays, or just-because parties — we take your vision and turn it into an unforgettable night.',
        features: ['Genre-specific playlists', 'Request-friendly performance', 'Any venue size', 'Setup & breakdown included', 'Flexible timing'],
        imageUrl: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'private party',
    },
    {
        title: 'Graduation Parties',
        price: 'Custom Quote',
        description: 'Celebrate your achievements with the perfect soundtrack. We mix what your grad loves and keep every generation on the dance floor.',
        features: ['Graduate\'s favorite genres', 'Hype MC moments', 'Photo slideshow music sync', 'Indoor & outdoor setups', 'Photo-ready lighting'],
        imageUrl: 'https://images.unsplash.com/photo-1599943821034-8cb5c7526922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'graduation party',
    },
    {
        title: 'Retirement Parties',
        price: 'Custom Quote',
        description: 'Honor a lifetime of hard work. We blend timeless classics with crowd favorites to create a warm, celebratory atmosphere.',
        features: ['Era-specific music (60s–2000s)', 'Low-key to full dance-floor options', 'Tribute & memory moment music', 'Dinner background music', 'Elegant sound setup'],
        imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'retirement celebration',
    },
    {
        title: 'Teen Events',
        price: 'Custom Quote',
        description: 'Sweet 16s, quinceaneras, and teenage celebrations. We know what\'s trending, what slaps, and how to keep a younger crowd hyped.',
        features: ['Current hits & trending sounds', 'TikTok & viral songs', 'Interactive games & crowd moments', 'Safe, age-appropriate music', 'High-energy performance'],
        imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'teen party',
    },
    {
        title: 'Family Gatherings',
        price: 'Custom Quote',
        description: 'Reunions, cultural celebrations, and holiday parties. Music that bridges generations — from grandparents to grandkids all on the same dance floor.',
        features: ['Multi-generational playlist', 'Cultural music expertise', 'Swahili, Kikuyu, Luo & more', 'Outdoor & indoor setups', 'Family-friendly atmosphere'],
        imageUrl: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        aiHint: 'family gathering',
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="bg-black text-white min-h-screen">
                {/* Header */}
                <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gray-900/40">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider mb-6">DJ Services</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            From intimate gatherings to grand celebrations, Chichi The DJ delivers the perfect soundtrack for every occasion in Seattle, WA and beyond.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4">
                        <div className="space-y-16">
                            {services.map((service, i) => (
                                <div
                                    key={service.title}
                                    className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                                >
                                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={service.aiHint}
                                        />
                                        <div className="absolute inset-0 bg-black/30" />
                                    </div>
                                    <div className={i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                                        <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider mb-3">{service.title}</h2>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                                        <ul className="space-y-2 mb-8">
                                            {service.features.map((f) => (
                                                <li key={f} className="flex items-center gap-3 text-gray-400 text-sm">
                                                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex items-center gap-4">
                                            <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest">
                                                <Link href="/contact">Get a Quote</Link>
                                            </Button>
                                            <span className="text-gray-500 text-sm">{service.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Kids Birthday Special */}
                <section className="py-16 bg-gray-900/50">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-primary/10 to-transparent p-8 md:p-12 rounded-2xl border border-primary/20 flex flex-col md:flex-row items-center gap-8">
                            <div className="bg-primary/10 p-6 rounded-full flex-shrink-0">
                                <Cake className="h-16 w-16 text-primary" />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Kids Birthday DJ — Special Package</h2>
                                <p className="text-gray-400 mb-4">Make your kid's birthday unforgettable with a DJ who brings unlimited fun, interactive games, and age-perfect music.</p>
                                <div className="flex items-baseline gap-3 justify-center md:justify-start">
                                    <span className="text-5xl font-extrabold text-primary">$800</span>
                                    <span className="text-gray-400">for unlimited hours</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest">
                                    <Link href="/contact">Book This Package</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
