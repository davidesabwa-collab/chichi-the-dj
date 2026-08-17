import { Star } from 'lucide-react';
import { getSiteContent } from '@/lib/firebase/firestore';
import type { TestimonialsContent } from '@/types/site-content';

const defaultContent: TestimonialsContent = {
    testimonials: [
        {
            quote: "He has great charisma, awesome and good variety of music. Brought great sound systems and lighting and kept the dance floor full all night long! Great vibes, energy and style!!",
            name: "Sarah M.",
            event: "Wedding Reception",
            rating: 5,
        },
        {
            quote: "DJ ChiChi did not disappoint. The sound was top notch and he read the crowd perfectly. Everyone had an amazing time from start to finish!",
            name: "James K.",
            event: "Corporate Event",
            rating: 5,
        },
        {
            quote: "Chichi made our graduation party absolutely unforgettable. He played all the right songs across every genre and kept the energy at 100 all night. Highly recommend!",
            name: "Aisha N.",
            event: "Graduation Party",
            rating: 5,
        },
        {
            quote: "Professional, punctual, and incredibly talented. Chichi had our whole family on the dance floor — from the kids to the grandparents. Will definitely book again!",
            name: "David O.",
            event: "Family Reunion",
            rating: 5,
        },
        {
            quote: "We hired Chichi for our company holiday party and it was a huge hit. He kept the vibe going for hours and took requests like a pro. Our team is still talking about it!",
            name: "Michelle T.",
            event: "Corporate Holiday Party",
            rating: 5,
        },
        {
            quote: "Chichi The DJ turned our wedding reception into an epic party. He knew exactly when to switch genres and kept everyone engaged all night. Worth every penny!",
            name: "Kevin & Priya L.",
            event: "Wedding",
            rating: 5,
        },
    ],
};

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
        </div>
    );
}

export default async function Testimonials() {
    const content = (await getSiteContent<TestimonialsContent>('testimonials')) || defaultContent;
    const testimonials = content.testimonials?.length ? content.testimonials : defaultContent.testimonials;

    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">What Clients Say</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it — hear from the people whose events we've made unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors duration-300"
                        >
                            <StarRating count={t.rating} />
                            <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                            <div>
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-xs text-primary uppercase tracking-wider">{t.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
