import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Shop T-shirts, Hoodies, Hats and many more',
    price: null,
    discount: '32% off!',
    imageUrl: 'https://placehold.co/400x500',
    aiHint: 't-shirt merchandise'
  },
  {
    name: 'Arap Trap Bold Summer Sweatshirt',
    price: 'Ksh 2,500',
    discount: null,
    imageUrl: 'https://placehold.co/400x500',
    aiHint: 'sweatshirt merchandise'
  },
  {
    name: 'DJ G400 Signature Sweatshirt',
    price: 'Ksh 2,500',
    discount: null,
    imageUrl: 'https://placehold.co/400x500',
    aiHint: 'signature sweatshirt'
  },
  {
    name: 'Four Pixels Studio Logo Sweatshirt',
    price: 'Ksh 2,500',
    discount: null,
    imageUrl: 'https://placehold.co/400x500',
    aiHint: 'logo sweatshirt'
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-16 sm:py-24 bg-background border-t-2 border-border">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
                Shop
            </h2>
            <p className="mt-2 text-foreground/70">Check out the latest collection of urban, modern, and fresh merchandise.</p>
            <Link href="#" className="mt-1 inline-block text-primary underline-offset-4 hover:underline">
                Go shopping
            </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link href="#" key={product.name}>
                <Card className="group overflow-hidden bg-card border-transparent hover:bg-secondary/50 transition-colors">
                <div className="w-full aspect-[4/5] relative">
                    <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint={product.aiHint}
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                        {product.price && <p className="text-sm text-foreground/90">{product.price}</p>}
                        {product.discount && <p className="text-sm text-green-400 font-bold">{product.discount}</p>}
                    </div>
                </div>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
