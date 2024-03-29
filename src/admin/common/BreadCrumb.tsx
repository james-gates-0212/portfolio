import { Breadcrumb } from 'flowbite-react';
import Link from 'next/link';

interface IBreadCrumbItem {
  href: string;
  name: string;
}

export default function BreadCrumb({ links }: { links: Array<IBreadCrumbItem> }) {
  return (
    <Breadcrumb className="mb-5">
      {(links || []).map((link: IBreadCrumbItem, i) => (
        <Breadcrumb.Item key={`breadcrumb-item-${i}`}>
          <Link href={link.href}>{link.name}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
