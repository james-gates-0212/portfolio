import '@/app/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { Raleway } from 'next/font/google';
import Footer from '@/components/Footer';
import NavBar from '@/components/clients/partials/NavBar';
import ReactTooltip from '@/components/clients/ReactTooltip';
import Stars from '@/components/clients/backgrounds/Stars';

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
      <body className="home">
        <Stars />
        <NavBar />
        {children}
        <Footer />
        <ReactTooltip />
      </body>
      <GoogleTagManager gtmId="G-1R1XC6TD2Z" />
    </html>
  );
}
