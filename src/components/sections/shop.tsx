
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/firebase/firestore';
import { Product } from '@/types/product';

export default async function Shop() {
  const products: Product[] = await getProducts();
  const featuredProducts = products.slice(0, 6);

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
          {featuredProducts.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group">
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
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                <Link href="/shop">View Full Shop</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

    