import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getSiteContent } from '@/lib/firebase/firestore';
import type { FaqContent } from '@/types/site-content';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Frequently asked questions about Chichi The DJ services, booking, equipment, and more.',
};

const defaultCategories = [
    {
        category: 'Booking',
        items: [
            {
                q: 'How far in advance should I book?',
                a: 'We recommend booking at least 4–6 weeks in advance for regular events, and 3–6 months in advance for weddings and large corporate events. Reservations are first come, first served upon making a down payment, so the sooner you book, the better.',
            },
            {
                q: 'How do I reserve my date?',
                a: 'Fill out the booking request form on our website or call/email us directly. Once we confirm availability, a down payment secures your date. Dates are not held without a deposit.',
            },
            {
                q: 'What is your cancellation policy?',
                a: 'Cancellations made more than 30 days before the event may receive a partial refund of the deposit. Cancellations within 30 days of the event are non-refundable. Please contact us as soon as possible if plans change.',
            },
            {
                q: 'Do you travel outside of Seattle?',
                a: 'Yes! While we are based in Seattle, WA, we are available for events throughout the Pacific Northwest and beyond. Travel fees may apply for events outside a 30-mile radius.',
            },
        ],
    },
    {
        category: 'Music & Performance',
        items: [
            {
                q: 'Do you take song requests?',
                a: 'Absolutely! We encourage clients to share a playlist or list of must-play and do-not-play songs before the event. We also take requests on the night as long as they fit the vibe.',
            },
            {
                q: 'What genres of music do you play?',
                a: 'We are fluent in 50+ genres including Afrobeat, Amapiano, Reggae, Dancehall, Hip Hop, R&B, Pop, Latin, Kikuyu, Ohangla, Soukous, Gospel, Mugithi, Soul, Classic Rock, 70s–90s classics, and much more. We DJ in multiple languages.',
            },
            {
                q: 'Can you serve as an MC as well?',
                a: 'Yes. Chichi The DJ has polished MC skills and can handle announcements, crowd engagement, and introductions — keeping your event running smoothly from start to finish.',
            },
            {
                q: 'How long do you perform?',
                a: 'Performance duration depends on the package you choose. Most event packages cover 4–6 hours. Kids Birthday packages offer unlimited hours. Overtime extensions are available at an additional hourly rate.',
            },
        ],
    },
    {
        category: 'Equipment & Setup',
        items: [
            {
                q: 'Do you provide sound and lighting equipment?',
                a: 'Yes. We bring professional-grade sound systems and lighting equipment suited for the size of your event. No need to hire a separate AV company for most events.',
            },
            {
                q: 'How early do you arrive to set up?',
                a: 'We typically arrive 1–2 hours before the event start time to ensure everything is set up, tested, and ready to go before your guests arrive.',
            },
            {
                q: 'What space or power requirements do you need?',
                a: 'We need a minimum 6×6 ft DJ booth area and access to at least two standard 15-amp power outlets. For larger events or outdoor settings, please let us know in advance so we can plan accordingly.',
            },
        ],
    },
    {
        category: 'Pricing',
        items: [
            {
                q: 'How much does Chichi The DJ cost?',
                a: 'Pricing depends on the event type, duration, location, and specific requirements. Fill out our booking form to receive a customized quote. Kids Birthday DJ packages start at $800 for unlimited hours.',
            },
            {
                q: 'Do you offer packages?',
                a: 'Yes, we offer various packages for weddings, corporate events, private parties, graduations, and kids events. Contact us for a detailed breakdown of what is included in each package.',
            },
            {
                q: 'Is a deposit required?',
                a: 'Yes, a deposit is required to secure your date. The remaining balance is due on or before the event date. Payment methods include Zelle, Venmo, Cash App, and cash.',
            },
        ],
    },
];

export default async function FAQPage() {
    const content = await getSiteContent<FaqContent>('faq');
    const faqs = content?.categories?.length ? content.categories : defaultCategories;
    return (
        <>
            <Header />
            <main className="bg-black text-white min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="max-w-2xl mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider">FAQ</h1>
                        <p className="mt-4 text-lg text-gray-400">
                            Everything you need to know about booking Chichi The DJ for your event. Can't find an answer?{' '}
                            <Link href="/#booking" className="text-primary underline underline-offset-4 hover:text-primary/80">
                                Contact us directly.
                            </Link>
                        </p>
                    </div>

                    {/* FAQ categories */}
                    <div className="space-y-14">
                        {faqs.map((category) => (
                            <div key={category.category}>
                                <h2 className="text-2xl font-bold text-primary uppercase tracking-wider mb-6 border-b border-gray-800 pb-3">
                                    {category.category}
                                </h2>
                                <div className="space-y-6">
                                    {category.items.map((item) => (
                                        <div key={item.q} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                                            <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-400 mb-4">Still have questions? We'd love to hear from you.</p>
                        <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest">
                            <Link href="/#booking">Get In Touch</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
