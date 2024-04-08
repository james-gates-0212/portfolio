'use client';

import { i18n } from '@/i18n';
import BreadCrumb from '@/admin/common/BreadCrumb';
import MyTable from '@/admin/common/MyTable';
import { useEffect, useState } from 'react';
import { Spinner } from 'flowbite-react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);

    fetch('/api/user', {
      method: 'POST',
    })
      .then(async (response) => {
        const { rows } = await response.json();
        setData(rows);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <BreadCrumb
        links={[
          { href: '/', name: 'Home' },
          { href: '#', name: i18n('entities.user.title') },
        ]}
      />
      {loading ? (
        <div className="flex flex-col items-center">
          <Spinner size="xl" />
        </div>
      ) : (
        <MyTable
          headers={[
            { key: 'id', label: 'entities.user.fields.id', classes: ['text-right'], width: 150 },
            { key: 'key', label: 'entities.user.fields.key', width: 300 },
            { key: 'value', label: 'entities.user.fields.value' },
            { key: 'createdAt', label: 'entities.user.fields.createdAt', width: 0 },
            { key: 'updatedAt', label: 'entities.user.fields.updatedAt', width: 0 },
          ]}
          rows={data}
          hasCheckBox
          hoverable
        />
      )}
    </div>
  );
}
