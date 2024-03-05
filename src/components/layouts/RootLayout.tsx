import '@/app/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import Footer from '@/components/Footer';
import NavBar from '@/components/clients/partials/NavBar';
import ReactTooltip from '@/components/clients/ReactTooltip';
import Stars from '@/components/clients/backgrounds/Stars';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
