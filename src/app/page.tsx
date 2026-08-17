
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import Gallery from '@/components/sections/gallery';
import MoreFeatures from '@/components/sections/more-features';
import Events from '@/components/sections/events';
import MixesSection from '@/components/sections/mixes';
import Testimonials from '@/components/sections/testimonials';
import Blog from '@/components/sections/blog';
import Shop from '@/components/sections/shop';
import Booking from '@/components/sections/booking';
import Footer from '@/components/footer';
import { getMixes, getSiteContent } from '@/lib/firebase/firestore';
import type { MixcloudMixesContent } from '@/types/site-content';

export default async function Home() {
  const [mixes, mixcloudContent] = await Promise.all([
    getMixes(),
    getSiteContent<MixcloudMixesContent>('mixcloud-mixes'),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <MoreFeatures />
        <Events />
        <MixesSection mixes={mixes} mixcloudMixes={mixcloudContent?.mixes} />
        <Testimonials />
        <Blog />
        <Shop />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
