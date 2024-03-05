import '@/app/globals.css';
import NavBar from '@/components/clients/partials/NavBar';
import Stars from '@/components/clients/backgrounds/Stars';
import Footer from '@/components/Footer';
import ReactTooltip from '@/components/clients/ReactTooltip';

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
    </html>
  );
}
