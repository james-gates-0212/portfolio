'use client';

import { i18n } from '@/i18n';
import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Navbar>
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
