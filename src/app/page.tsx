import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Mixes from '@/components/sections/mixes';
import Shop from '@/components/sections/shop';
import MoreFeatures from '@/components/sections/more-features';
import Footer from '@/components/footer';
import Events from '@/components/sections/events';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Mixes />
        <Shop />
        <MoreFeatures />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
