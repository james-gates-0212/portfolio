'use client';

import { Button, Spinner } from 'flowbite-react';
import { DEFAULT_MOMENT_FORMAT } from '@/components/Commons';
import { i18n } from '@/i18n';
import { useEffect, useMemo, useState } from 'react';
import BreadCrumb from '@/admin/common/BreadCrumb';
import MyTable from '@/admin/common/MyTable';
import UserInfoModal from '@/components/admin/user/Modal';
import ConfirmModal from '@/admin/common/ConfirmModal';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [deleteConfirm, setDeleteConfirm] = useState<null | number>(null);
  const [modal, setModal] = useState<null | number>(null);

  const handleCloseDeleteConfirm = () => setDeleteConfirm(null);
  const handleDeleteConfirm = () => {
    setLoading(true);
    const delId = deleteConfirm;
    setDeleteConfirm(null);

    fetch(`/api/user/${delId}`, { method: 'DELETE' })
      .then(async (response) => {
        const { rows } = await response.json();
        setData(rows);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  };

  const handleRefreshTable = () =>
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

  useEffect(() => {
    setLoading(true);

    handleRefreshTable();
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
                    label: 'common.action',
                    classes: ['whitespace-nowrap'],
                    width: 0,
                    render: (value: number) => (
                      <span className="flex flex-row gap-5">
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                          onClick={(evt) => {
                            evt.preventDefault();
                            evt.stopPropagation();
                            if (modal) {
                              return;
                            }
                            setModal(value);
                          }}
                        >
                          {i18n('common.edit')}
                        </a>
                        <a
                          href="#"
                          className="font-medium text-red-600 hover:underline dark:text-red-500"
                          onClick={(evt) => {
                            evt.preventDefault();
                            evt.stopPropagation();
                            if (deleteConfirm) {
                              return;
                            }
                            setDeleteConfirm(value);
                          }}
                        >
                          {i18n('common.delete')}
                        </a>
                      </span>
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
      {useMemo(
        () => (
          <ConfirmModal
            message="questions.delete"
            onClose={handleCloseDeleteConfirm}
            onConfirm={handleDeleteConfirm}
            show={Boolean(deleteConfirm)}
          />
        ),
        [deleteConfirm],
      )}
    </>
  );
}
