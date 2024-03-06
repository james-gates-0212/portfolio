import '@/app/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { Raleway } from 'next/font/google';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import NavBar from '@/components/clients/partials/NavBar';
import PreImage from '@/app/assets/pre.svg';
import ReactTooltip from '@/components/clients/ReactTooltip';
import Stars from '@/components/clients/backgrounds/Stars';

const Loading = () => (
  <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
    <Image src={PreImage} alt="Loading..." title="Loading..." priority />
  </div>
);

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="overflow-hidden">
        <Suspense fallback={<Loading />}>
          <Stars />
          <div className="fixed top-16 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden">
            <NavBar />
            {children}
            <Footer />
          </div>
          <ReactTooltip />
        </Suspense>
      </body>
      <GoogleTagManager gtmId="G-1R1XC6TD2Z" />
    </html>
  );
}
