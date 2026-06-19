
import { getBlog, getBlogs } from '@/lib/firebase/firestore';
import { Blog } from '@/types/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

type BlogPageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlog(params.id);
  if (!blog) return { title: 'Post Not Found' };
  const excerpt = blog.content?.slice(0, 160).replace(/\n/g, ' ');
  return {
    title: blog.title,
    description: excerpt,
    openGraph: {
      title: `${blog.title} | Chichi The DJ Blog`,
      description: excerpt,
      images: blog.thumbnailUrl ? [{ url: blog.thumbnailUrl }] : [],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog: Blog | null = await getBlog(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to All Posts
          </Link>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-8">
            <Image
              src={blog.thumbnailUrl}
              alt={`Thumbnail for ${blog.title}`}
              fill
              className="object-cover"
              data-ai-hint={blog.aiHint}
            />
          </div>
          <p className="text-gray-400 mb-2">{blog.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
          <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 whitespace-pre-wrap">
            {blog.content}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    