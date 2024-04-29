'use client';

import { Button, Spinner } from 'flowbite-react';
import { DEFAULT_MOMENT_FORMAT } from '@/components/Commons';
import { i18n } from '@/i18n';
import { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from '@/admin/common/BreadCrumb';
import MyTable from '@/admin/common/MyTable';
import ProfileInfoModal from '@/components/admin/profile/Modal';
import ConfirmModal from '@/admin/common/ConfirmModal';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [deleteConfirm, setDeleteConfirm] = useState<null | number>(null);
  const [modal, setModal] = useState<null | number>(null);

  const handleCloseDeleteConfirm = useCallback(() => setDeleteConfirm(null), []);
  const handleDeleteConfirm = useCallback(() => {
    setLoading(true);
    const delId = deleteConfirm;
    setDeleteConfirm(null);

    fetch(`/api/profile/${delId}`, { method: 'DELETE' })
      .then(async (response) => {
        const { rows } = await response.json();
        setData(rows);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  }, [deleteConfirm]);

  const handleRefreshTable = useCallback(
    () =>
      fetch('/api/profile', {
        method: 'POST',
      })
        .then(async (response) => {
          const { rows } = await response.json();
          setData(rows);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => setLoading(false)),
    [],
  );

  useEffect(() => {
    setLoading(true);

    handleRefreshTable();
  }, [handleRefreshTable]);

  return (
    <>
      {useMemo(
        () => (
          <main>
            <div className="flex flex-row justify-between items-center mb-5">
              <BreadCrumb
                links={[
                  { href: '/', name: 'Home' },
                  { href: '#', name: i18n('entities.profile.menu') },
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
                  { key: 'id', label: 'entities.profile.fields.id', classes: ['text-right'], width: 150 },
                  { key: 'name', label: 'entities.profile.fields.name', width: 300 },
                  { key: 'description', label: 'entities.profile.fields.description' },
                  {
                    key: 'activatedAt',
                    label: 'entities.profile.fields.activatedAt',
                    classes: ['whitespace-nowrap', 'text-center'],
                    width: 0,
                    format: { moment: DEFAULT_MOMENT_FORMAT },
                  },
                  {
                    key: 'createdAt',
                    label: 'entities.profile.fields.createdAt',
                    classes: ['whitespace-nowrap', 'text-center'],
                    width: 0,
                    format: { moment: DEFAULT_MOMENT_FORMAT },
                  },
                  {
                    key: 'updatedAt',
                    label: 'entities.profile.fields.updatedAt',
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
        [loading, data, deleteConfirm, modal],
      )}
      {useMemo(
        () => (
          <ProfileInfoModal onClose={() => setModal(null)} recId={modal} handleRefresh={handleRefreshTable} />
        ),
        [handleRefreshTable, modal],
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
        [handleCloseDeleteConfirm, handleDeleteConfirm, deleteConfirm],
      )}
    </>
  );
}
