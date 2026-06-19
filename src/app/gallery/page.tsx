import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Browse photos and moments from Chichi The DJ\'s events — weddings, corporate parties, concerts, and private celebrations across Seattle, WA.',
    keywords: ['Chichi The DJ photos', 'DJ event gallery Seattle', 'wedding DJ photos', 'event DJ gallery'],
    openGraph: {
        title: 'Event Gallery | Chichi The DJ Official',
        description: 'Photos from weddings, corporate events, concerts, and private parties by Chichi The DJ in Seattle, WA.',
        url: 'https://www.chichithedj.us/gallery',
    },
};

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Live concert crowd energy', category: 'Concerts', aiHint: 'concert crowd' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'DJ performing on stage', category: 'Live Sets', aiHint: 'dj on stage' },
    { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Wedding reception celebration', category: 'Weddings', aiHint: 'wedding reception' },
    { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'DJ booth and equipment', category: 'Setup', aiHint: 'dj equipment' },
    { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Dance floor under colorful lights', category: 'Dance Floor', aiHint: 'dance floor lights' },
    { src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Corporate event setup', category: 'Corporate', aiHint: 'corporate event' },
    { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Outdoor festival crowd', category: 'Festivals', aiHint: 'outdoor festival' },
    { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Party lights and atmosphere', category: 'Atmosphere', aiHint: 'party lights' },
    { src: 'https://images.unsplash.com/photo-1599943821034-8cb5c7526922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Graduation party celebration', category: 'Graduations', aiHint: 'graduation celebration' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Elegant event celebration', category: 'Private Events', aiHint: 'elegant party' },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Teen party energy', category: 'Teen Events', aiHint: 'teen party energy' },
    { src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Family gathering celebration', category: 'Family Events', aiHint: 'family gathering' },
];

export default function GalleryPage() {
    return (
        <>
            <Header />
            <main className="bg-black text-white min-h-screen">
                {/* Header */}
                <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gray-900/40">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Moments We've Created</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider mb-4">Event Gallery</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A glimpse into the unforgettable moments Chichi The DJ has brought to life — from packed dance floors to intimate celebrations.
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-12 sm:py-16">
                    <div className="container mx-auto px-4">
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                            {galleryImages.map((image, i) => (
                                <div key={i} className="relative break-inside-avoid overflow-hidden rounded-lg group">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        data-ai-hint={image.aiHint}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                                        <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-primary/80 px-2 py-1 rounded">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* More on Social CTA */}
                <section className="py-16 bg-gray-900/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">See More on Social Media</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Follow Chichi The DJ on Facebook and Instagram for real event photos, behind-the-scenes content, and live videos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest">
                                <Link href="https://www.facebook.com/chichithedjofficial/" target="_blank" rel="noopener noreferrer">
                                    Follow on Facebook
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-bold uppercase tracking-widest">
                                <Link href="https://www.instagram.com/chichithedjofficial/" target="_blank" rel="noopener noreferrer">
                                    Follow on Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
