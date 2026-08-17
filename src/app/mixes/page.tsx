import Header from '@/components/header';
import Footer from '@/components/footer';
import MixesPageClient from './mixes-page-client';

export default async function MixesPage() {
  return <MixesPageClient header={<Header />} footer={<Footer />} />;
}
