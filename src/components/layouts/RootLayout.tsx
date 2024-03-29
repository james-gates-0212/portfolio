import { Flowbite } from 'flowbite-react';
import Footer from '@/components/Footer';
import NavBar from '@/components/clients/partials/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flowbite>
      <NavBar />
      {children}
      <Footer />
    </Flowbite>
  );
}
