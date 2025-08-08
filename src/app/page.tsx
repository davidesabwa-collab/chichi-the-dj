
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Mixes from '@/components/sections/mixes';
import Shop from '@/components/sections/shop';
import Booking from '@/components/sections/booking';
import Footer from '@/components/footer';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import Gallery from '@/components/sections/gallery';
import Events from '@/components/sections/events';
import Blog from '@/components/sections/blog';


export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Events />
        <Mixes />
        <Blog />
        <Shop />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
