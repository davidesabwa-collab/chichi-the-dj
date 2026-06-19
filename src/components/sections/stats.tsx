
const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Events Hosted' },
    { value: '50+', label: 'Music Genres' },
    { value: '3', label: 'Radio Stations Featured' },
];

export default function Stats() {
    return (
        <section className="bg-primary py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl md:text-5xl font-extrabold text-black">{stat.value}</p>
                            <p className="mt-1 text-sm font-semibold text-black/70 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
