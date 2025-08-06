
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getBlogs } from '@/lib/firebase/firestore';
import { Blog } from '@/types/blog';

export default async function BlogSection() {
  const blogs: Blog[] = await getBlogs();

  // Show only the 3 most recent posts on the homepage
  const recentPosts = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                From The Blog
            </h2>
            <p className="mt-2 text-gray-400">
                Stay updated with album reviews, music news, and exclusive insights.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
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
                     <Button variant="link" className="text-primary p-0 h-auto mt-4 self-start">Read More &rarr;</Button>
                </div>
            </Link>
          ))}
        </div>
        {blogs.length > 0 && (
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                    <Link href="/blog">View All Posts</Link>
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}

    