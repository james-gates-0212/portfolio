import NavBar from '@/components/admin/NavBar';
import { Flowbite } from 'flowbite-react';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flowbite>
      <NavBar />
      {children}
    </Flowbite>
  );
}
