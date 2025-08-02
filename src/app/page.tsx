import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Music from '@/components/sections/music';
import Events from '@/components/sections/events';
import Gallery from '@/components/sections/gallery';
import Services from '@/components/sections/services';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Music />
        <Events />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
