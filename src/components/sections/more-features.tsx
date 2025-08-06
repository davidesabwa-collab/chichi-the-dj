import Link from 'next/link';
import { Headphones, Disc, Spotify, Book, CalendarDays, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: Disc,
    title: 'Mixes',
    description: 'Exclusive DJ sets and fresh mixes bringing energy to you.',
    href: '#mixes'
  },
  {
    icon: ShoppingCart,
    title: 'Shop',
    description: 'From merch, digital downloads, artworks, wallpapers, and more.',
    href: '#shop'
  },
  {
    icon: Spotify,
    title: 'Playlists',
    description: 'Vibe to handpicked collections, perfect for every moment and mood.',
    href: '#'
  },
  {
    icon: Headphones,
    title: 'Remixes',
    description: 'Enter a world of reimagined hits, exclusive mashups & signature sound remixes!',
    href: '#'
  },
  {
    icon: Book,
    title: 'Blogs',
    description: 'Get album reviews, music news, and DJ Chichi insights!',
    href: '#'
  },
  {
    icon: CalendarDays,
    title: 'Events',
    description: 'Check past and future events where DJ Chichi takes the stage!',
    href: '#events'
  }
];

export default function MoreFeatures() {
  return (
    <section className="bg-[#141414] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
            Beyond the Sound, <br /> Into the Experience
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Discover the best in DJ mixes, shop exclusive apparel, and dive into curated playlists to elevate your music experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group block p-6 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <feature.icon className="h-8 w-8 text-gray-500 group-hover:text-white transition-colors" />
                <span className="text-2xl text-gray-600 group-hover:text-white transition-colors">↗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300 group-hover:text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-400">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
