import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { i18n } from '@/i18n';
import { usePathname } from 'next/navigation';
import { VLLinkedin } from '@icongo/vl';
import Link from 'next/link';
import NavItems from '@/infos/NavItems';

export default function NavBar() {
  const current = usePathname();

  return (
    <Navbar>
      <NavbarBrand as={Link} href="/">
        <VLLinkedin className="mr-3 h-6 sm:h-9" width={32} height={32} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{i18n('app.title')}</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {NavItems.map((item) => (
          <NavbarLink as={Link} key={item.name} href={item.href} active={current == item.href}>
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
