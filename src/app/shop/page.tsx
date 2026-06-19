import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Official Chichi The DJ merchandise — urban, modern, and fresh apparel and accessories. Show your support with exclusive gear.',
    openGraph: {
        title: 'Shop | Chichi The DJ Official',
        description: 'Official Chichi The DJ merchandise — exclusive urban apparel and accessories.',
        url: 'https://www.chichithedj.us/shop',
    },
};
import Link from 'next/link';
import { getProducts } from '@/lib/firebase/firestore';
import { Product } from '@/types/product';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function ShopListPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <section id="shop" className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider">
                Merchandise
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Check out the latest collection of urban, modern, and fresh merchandise from Chichi The DJ.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    