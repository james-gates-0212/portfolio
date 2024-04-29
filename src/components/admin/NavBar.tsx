'use client';

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react';
import { i18n } from '@/i18n';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menus } from '@/components/admin/menu';

export default function NavBar() {
  const current = usePathname();

  return (
    <Navbar className="sticky top-0 mb-5 z-50">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{i18n('app.title')}</span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <DarkThemeToggle />
        <Dropdown label={<Avatar placeholderInitials="JG" rounded />} arrowIcon={false} inline>
          <Dropdown.Header>
            <span className="block text-sm">James Gates</span>
            <span className="block truncate text-sm font-medium">james.gates.0212@gmail.com</span>
          </Dropdown.Header>
          {Menus.map(({ label, route }, index) => (
            <Dropdown.Item key={`navbar-dropdown-item-${index}`} as={Link} href={route}>
              {i18n(label)}
            </Dropdown.Item>
          ))}
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {Menus.map(({ label, route }, index) => (
          <Navbar.Link key={`navbar-item-${index}`} as={Link} href={route}>
            {i18n(label)}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
