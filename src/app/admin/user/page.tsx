'use client';

import { i18n } from '@/i18n';
import BreadCrumb from '@/admin/common/BreadCrumb';
import MyTable from '@/admin/common/MyTable';

export default function Page() {
  return (
    <div>
      <BreadCrumb
        links={[
          { href: '/', name: 'Home' },
          { href: '#', name: i18n('entities.user.title') },
        ]}
      />
      <MyTable
        headers={[
          { key: 'id', label: 'entities.user.fields.id' },
          { key: 'fullName', label: 'entities.user.fields.fullName' },
          { key: 'firstName', label: 'entities.user.fields.firstName' },
          { key: 'lastName', label: 'entities.user.fields.lastName' },
          { key: 'email', label: 'entities.user.fields.email' },
        ]}
        rows={[
          {
            id: 1,
            fullName: 'Brian Salvatore',
            firstName: 'James',
            lastName: 'Gates',
            email: 'james.gates.0212@gmail.com',
          },
          {
            id: 2,
            fullName: 'Brian Salvatore',
            firstName: {
              value: 'James',
              render: (value) => (
                <span className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{value}</span>
              ),
            },
            lastName: 'Gates',
            email: 'pop.runner88@outlook.com',
          },
        ]}
        hasCheckBox
        hoverable
      />
    </div>
  );
}
