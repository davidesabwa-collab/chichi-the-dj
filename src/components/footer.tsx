import { Icons } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-12 flex justify-center items-center">
        <Icons.footerLogo className="h-10 text-foreground" />
      </div>
    </footer>
  );
}
