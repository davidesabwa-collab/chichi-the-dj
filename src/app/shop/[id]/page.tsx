
import { getProduct, getProducts } from '@/lib/firebase/firestore';
import { Product } from '@/types/product';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product: Product | null = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
            <Link href="/shop" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to Shop
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={product.imageUrl}
                        alt={`Image for ${product.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={product.aiHint}
                    />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                    <p className="text-3xl text-primary mb-6">{product.price}</p>
                    <p className="text-gray-400 mb-8">
                        High-quality merchandise from Chichi The DJ. Show your support with this exclusive item.
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <Button size="lg" className="flex-1">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                         <Button size="lg" variant="outline" className="flex-1">
                            Buy Now
                        </Button>
                    </div>

                    <div className="mt-12 text-sm text-gray-500">
                        <p>Free shipping on orders over $50.</p>
                        <p>30-day return policy.</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    