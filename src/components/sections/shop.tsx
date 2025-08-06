import Image from 'next/image';
import Link from 'next/link';

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
    price: '$25.00',
    discount: null,
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'sweatshirt merchandise'
  },
  {
    name: 'DJ Signature Sweatshirt',
    price: '$25.00',
    discount: null,
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'signature sweatshirt'
  },
  {
    name: 'Studio Logo Sweatshirt',
    price: '$25.00',
    discount: null,
    imageUrl: 'https://placehold.co/400x500',
    hoverImageUrl: 'https://placehold.co/400x500/cccccc/333333',
    aiHint: 'logo sweatshirt'
  },
];

export default function Shop() {
  return (
    <section id="shop" className="pt-4 pb-16 sm:pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Shop
            </h2>
            <p className="mt-2 text-gray-400">Check out the latest collection of urban, modern, and fresh merchandise. <br />
                <Link href="#" className="text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors">
                    Go shopping
                </Link>
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Link href="#" key={product.name} className="group">
                <figure className="w-full aspect-[4/5] relative overflow-hidden rounded-lg mb-2 figure-card">
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
                </figure>
                <div>
                    <h3 className="font-medium text-sm text-gray-300 group-hover:underline truncate">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                        {product.price && <p className="text-sm text-gray-400 font-semibold">{product.price}</p>}
                        {product.discount && <p className="text-sm text-green-400 font-bold">{product.discount}</p>}
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
