import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Music news, album reviews, DJ insights, and event recaps from Chichi The DJ. Stay in the loop with the latest from Seattle\'s premier DJ.',
    openGraph: {
        title: 'Blog | Chichi The DJ Official',
        description: 'Music news, album reviews, and exclusive insights from Chichi The DJ.',
        url: 'https://www.chichithedj.us/blog',
    },
};
import Link from 'next/link';
import { getBlogs } from '@/lib/firebase/firestore';
import { Blog } from '@/types/blog';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function BlogListPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div className="flex flex-col min-h-screen bg-black">
        <Header />
        <main className="flex-1">
            <section id="blog" className="py-24 sm:py-32 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-wider">
                        From The Blog
                    </h1>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Stay updated with album reviews, music news, and exclusive insights from Chichi The DJ.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id} className="group">
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                            <Image
                                src={post.thumbnailUrl}
                                alt={`Thumbnail for ${post.title}`}
                                fill
                                className="object-cover rounded-lg group-hover:scale-105 transition-transform"
                                data-ai-hint={post.aiHint || 'blog post'}
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                            <h3 className="font-bold text-xl text-gray-100 group-hover:underline mb-2">{post.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.content}</p>
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

    