import RootLayout from '@/components/layouts/RootLayout';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout children={children} />;
}
