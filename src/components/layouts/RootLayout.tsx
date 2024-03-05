import '@/app/globals.css';
import NavBar from '@/components/clients/partials/NavBar';
import Stars from '@/components/clients/backgrounds/Stars';
import Footer from '@/components/Footer';

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
      </body>
    </html>
  );
}
