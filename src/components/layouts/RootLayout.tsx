'use client';

import Footer from '@/components/Footer';
import ReactTooltip from '@/components/clients/ReactTooltip';
import Stars from '@/components/clients/backgrounds/Stars';
import NavBar from '@/components/clients/partials/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
