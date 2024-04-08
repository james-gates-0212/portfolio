'use client';

import { Button, Spinner } from 'flowbite-react';
import { DEFAULT_MOMENT_FORMAT } from '@/components/Commons';
import { i18n } from '@/i18n';
import { useEffect, useMemo, useState } from 'react';
import BreadCrumb from '@/admin/common/BreadCrumb';
import MyTable from '@/admin/common/MyTable';
import UserInfoModal from '@/components/admin/user/Modal';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [modal, setModal] = useState<number | null>(null);

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
    <>
      {useMemo(
        () => (
          <main>
            <div className="flex flex-row justify-between items-center mb-5">
              <BreadCrumb
                links={[
                  { href: '/', name: 'Home' },
                  { href: '#', name: i18n('entities.user.title') },
                ]}
              />
              <div>
                <Button color="gray" size="sm" pill onClick={() => setModal(-1)}>
                  {i18n('common.addNew')}
                </Button>
              </div>
            </div>
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
                  {
                    key: 'createdAt',
                    label: 'entities.user.fields.createdAt',
                    classes: ['whitespace-nowrap', 'text-center'],
                    width: 0,
                    format: { moment: DEFAULT_MOMENT_FORMAT },
                  },
                  {
                    key: 'updatedAt',
                    label: 'entities.user.fields.updatedAt',
                    classes: ['whitespace-nowrap', 'text-center'],
                    width: 0,
                    format: { moment: DEFAULT_MOMENT_FORMAT },
                  },
                  {
                    key: 'action',
                    label: '@',
                    classes: ['whitespace-nowrap', 'text-right'],
                    width: 0,
                    render: (value: number) => (
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={(evt) => {
                          evt.preventDefault();
                          evt.stopPropagation();
                          if (modal) {
                            return;
                          }
                          console.log('click');
                          setModal(value);
                        }}
                      >
                        Edit
                      </a>
                    ),
                  },
                ]}
                rows={data}
                hasCheckBox
                hoverable
              />
            )}
          </main>
        ),
        [loading, data],
      )}
      {useMemo(
        () => (
          <UserInfoModal onClose={() => setModal(null)} recId={modal} />
        ),
        [modal],
      )}
    </>
  );
}
