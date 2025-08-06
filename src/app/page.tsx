import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Mixes from '@/components/sections/mixes';
import Shop from '@/components/sections/shop';
import MoreFeatures from '@/components/sections/more-features';
import Events from '@/components/sections/events';
import Booking from '@/components/sections/booking';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mixes />
        <Shop />
        <MoreFeatures />
        <Events />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
