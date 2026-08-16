import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { BookingForm } from '@/components/booking-form';
import { getEvents } from '@/lib/firebase/firestore';
import { Mail, Phone, MapPin, MessageCircle, Info, Clock, ShoppingBag, IdCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Contact & Booking',
    description: 'Book Chichi The DJ for your next event in Seattle, WA. Get a customized quote for weddings, corporate events, private parties, and more. Call +1(360)995-3309 or email us.',
    keywords: ['book DJ Seattle', 'hire DJ Seattle', 'DJ booking inquiry', 'Chichi The DJ contact', 'Seattle wedding DJ booking'],
    openGraph: {
        title: 'Contact & Book | Chichi The DJ Official',
        description: 'Book Chichi The DJ for your next event. Get a free customized quote today.',
        url: 'https://www.chichithedj.us/contact',
    },
};

const contactDetails = [
    {
        icon: MapPin,
        label: 'Location',
        lines: ['Seattle, WA', 'Available throughout the Pacific Northwest'],
    },
    {
        icon: Phone,
        label: 'Phone',
        lines: ['+1 (360) 995-3309'],
        href: 'tel:+13609953309',
    },
    {
        icon: Mail,
        label: 'Email',
        lines: ['actualizeevents@gmail.com', 'hi@chichithedj.us'],
        href: 'mailto:actualizeevents@gmail.com',
    },
    {
        icon: Clock,
        label: 'Response Time',
        lines: ['Usually within 24 hours', 'Mon – Sat, 9am – 8pm PT'],
    },
];

export default async function ContactPage() {
    const events = await getEvents();

    return (
        <>
            <Header />
            <main className="bg-black text-white min-h-screen">
                {/* Header */}
                <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gray-900/40">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Let's Work Together</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider mb-4">Contact & Booking</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Ready to make your event unforgettable? Fill out the form below or reach out directly. We'll get back to you with a customized quote.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-5 gap-12">

                            {/* Contact info sidebar */}
                            <div className="lg:col-span-2 space-y-6">
                                {contactDetails.map((c) => (
                                    <div key={c.label} className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                            <c.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">{c.label}</p>
                                            {c.lines.map((line, i) =>
                                                c.href && i === 0 ? (
                                                    <a key={line} href={c.href} className="block text-gray-400 hover:text-primary transition-colors text-sm">{line}</a>
                                                ) : (
                                                    <p key={line} className="text-gray-400 text-sm">{line}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* WhatsApp */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                        <MessageCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-2">WhatsApp</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                href="https://wa.me/13609953309"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-500 transition-colors"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                Chat on WhatsApp
                                            </Link>
                                            <Link
                                                href="https://wa.me/c/13609953309"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-700/80 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
                                            >
                                                <ShoppingBag className="h-4 w-4" />
                                                View Catalog
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Digital contact card */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                        <IdCard className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Digital Contact Card</p>
                                            <Link
                                                href="https://hihello.com/p/8c4fc279-227c-43b6-a2d4-919b387b0614"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-black text-sm font-semibold hover:bg-primary/90 transition-colors"
                                            >
                                                <IdCard className="h-4 w-4" />
                                                Save My Contact
                                            </Link>
                                        </div>
                                        <a
                                            href="https://hihello.com/p/8c4fc279-227c-43b6-a2d4-919b387b0614"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-shrink-0"
                                        >
                                            <Image
                                                src="/chichi-contact-qr.jpg"
                                                alt="Scan to save Chichi The DJ's contact information"
                                                width={88}
                                                height={88}
                                                className="rounded-md border border-gray-800"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* Booking policy */}
                                <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
                                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-400">
                                        <span className="text-white font-semibold">Booking Policy: </span>
                                        Reservations are first come, first served upon making a down payment. Dates are not secured without a deposit.
                                    </p>
                                </div>

                                {/* Social quick links */}
                                <div className="pt-4 border-t border-gray-800">
                                    <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Also reach us on</p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            { label: 'Facebook', href: 'https://www.facebook.com/chichithedjofficial/' },
                                            { label: 'Instagram', href: 'https://www.instagram.com/chichithedjofficial/' },
                                            { label: 'TikTok', href: 'https://www.tiktok.com/@chichithedj' },
                                            { label: 'Snapchat', href: 'https://snapchat.com/t/KpqWfo23' },
                                        ].map((s) => (
                                            <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                                className="text-xs border border-gray-700 text-gray-400 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">
                                                {s.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Booking form */}
                            <div className="lg:col-span-3 bg-gray-900 p-8 rounded-2xl border border-gray-800">
                                <h2 className="text-2xl font-bold text-white mb-6">Request a Quote</h2>
                                <BookingForm events={events} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
