'use client';

import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { i18n } from '@/i18n';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const current = usePathname();

  return (
    <Navbar className="sticky top-0 mb-5 z-50">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{i18n('app.title')}</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/admin/user">
          {i18n('entities.user.menu')}
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
