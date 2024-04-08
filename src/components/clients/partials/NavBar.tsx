'use client';

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react';
import { i18n } from '@/i18n';
import { usePathname } from 'next/navigation';
import { VLLinkedin } from '@icongo/vl';
import Link from 'next/link';
import NavItems from '@/infos/NavItems';

export default function NavBar() {
  const current = usePathname();

  return (
    <Navbar className="sticky top-0 z-50">
      <Navbar.Brand as={Link} href="/">
        <VLLinkedin className="mr-3 h-6 sm:h-9" width={32} height={32} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{i18n('app.title')}</span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <DarkThemeToggle />
        <Dropdown label={<Avatar placeholderInitials="JG" rounded />} arrowIcon={false} inline>
          <Dropdown.Header>
            <span className="block text-sm">James Gates</span>
            <span className="block truncate text-sm font-medium">james.gates.0212@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item as={Link} href="/admin/user">
            User
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NavItems.map((item) => (
          <Navbar.Link as={Link} key={item.name} href={item.href} active={current == item.href}>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
