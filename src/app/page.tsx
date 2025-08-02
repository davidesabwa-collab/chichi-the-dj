import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Mixes from '@/components/sections/mixes';
import Shop from '@/components/sections/shop';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mixes />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
