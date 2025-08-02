import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Gallery from '@/components/sections/gallery';
import WhyUs from '@/components/sections/why-us';
import Booking from '@/components/sections/booking';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
