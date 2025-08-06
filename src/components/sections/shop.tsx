import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'T-shirt',
    price: '$25.00',
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 't-shirt merchandise'
  },
  {
    name: 'Hoodie',
    price: '$45.00',
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'hoodie merchandise'
  },
  {
    name: 'Ladies Tank Top',
    price: '$25.00',
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'tank top merchandise'
  },
  {
    name: 'Ladies Jump Suit',
    price: '$100.00',
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'jumpsuit merchandise'
  },
  {
    name: 'Men Jump Suit',
    price: '$100.00',
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'men jumpsuit'
  },
  {
    name: 'Baseball Hat',
    price: '$50.00',
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'baseball hat'
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
            Merchandise
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Check out the latest collection of urban, modern, and fresh merchandise from Chichi The DJ.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <Link href="#" key={product.name} className="group">
              <figure className="w-full aspect-[4/5] relative overflow-hidden rounded-lg mb-4 figure-card transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={product.aiHint}
                />
                {product.hoverImageUrl && (
                  <Image
                    src={product.hoverImageUrl}
                    alt={`${product.name} hover`}
                    fill
                    className="object-cover"
                    data-ai-hint={`${product.aiHint} alternate`}
                  />
                )}
                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
              </figure>
              <div className="text-center">
                <h3 className="font-semibold text-md text-gray-200 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-md text-gray-400 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
         <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                View Full Shop
            </Button>
        </div>
      </div>
    </section>
  );
}
