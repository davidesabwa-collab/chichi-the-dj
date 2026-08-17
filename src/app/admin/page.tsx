import Header from '@/components/header';
import Footer from '@/components/footer';
import AdminDashboard from './admin-dashboard';

export default async function AdminPage() {
  return <AdminDashboard header={<Header />} footer={<Footer />} />;
}
