
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getMixes } from '@/lib/firebase/firestore';
import { Mix } from '@/types/mix';

export default async function Mixes() {
  const mixes: Mix[] = await getMixes();

  return (
    <section id="mixes" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Mixes
            </h2>
            <p className="mt-2 text-gray-400">Experience ad-free and high quality mixes. <br />
                <Link href="#" className="text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors">
                    Check out mixes
                </Link>
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mixes.map((mix) => (
            <Link href="#" key={mix.id} className="group">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-2">
                    <Image
                        src={mix.coverUrl}
                        alt={`Cover for ${mix.title}`}
                        fill
                        className="object-cover rounded-md group-hover:opacity-80 transition-opacity"
                        data-ai-hint={`${mix.genre} music abstract`}
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-base text-gray-100 group-hover:underline">{mix.title}</h3>
                    <p className="text-xs text-gray-500">
                        {mix.genre} &middot; {mix.date} &middot; {mix.views} views
                    </p>
                </div>
            </Link>
          ))}
        </div>
        {mixes.length > 4 && (
            <div className="mt-12">
                <Button variant="link" className="text-white p-0 h-auto text-lg hover:no-underline hover:text-gray-300">
                    Load More Mixes
                </Button>
            </div>
        )}
        <hr className="mt-12 border-gray-800" />
      </div>
    </section>
  );
}
