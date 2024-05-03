'use client';

import { Button, Select, Spinner } from 'flowbite-react';
import { DEFAULT_MOMENT_FORMAT } from '@/components/Commons';
import { i18n } from '@/i18n';
import { IProfile } from '@/components/Interfaces';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import BreadCrumb from '@/admin/common/BreadCrumb';
import ConfirmModal from '@/admin/common/ConfirmModal';
import ExperienceInfoModal from '@/components/admin/experience/Modal';
import MyTable from '@/admin/common/MyTable';
import moment from 'moment';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [profiles, setProfiles] = useState<Array<IProfile>>([]);

  const profileRef = useRef<HTMLSelectElement>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<null | number>(null);
  const [modal, setModal] = useState<null | number>(null);

  const handleCloseDeleteConfirm = useCallback(() => setDeleteConfirm(null), []);
  const handleDeleteConfirm = useCallback(() => {
    setLoading(true);
    const delId = deleteConfirm;
    setDeleteConfirm(null);

    fetch(`/api/experience/${delId}`, { method: 'DELETE' })
      .then(async (response) => {
        const { rows } = await response.json();
        setData(rows);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  }, [deleteConfirm]);

  const handleRefreshTable = useCallback(() => {
    setLoading(true);
    fetch('/api/experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profile: profileRef.current?.value,
      }),
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

  const handleRefreshProfiles = useCallback(
    () =>
      fetch('/api/profile', {
        method: 'POST',
      })
        .then(async (response) => {
          const { rows } = await response.json();
          setProfiles(rows);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => setLoading(false)),
    [],
  );

  const renderExperiencePeriod = useCallback((value) => {
    if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
      return null;
    }
    const momentValue = moment(value);
    const months = moment.monthsShort();
    return [months[momentValue.month()], momentValue.year()].join(' ');
  }, []);

  useEffect(() => {
    setLoading(true);

    handleRefreshProfiles();
  }, [handleRefreshProfiles]);

  return (
    <>
      {useMemo(
        () => (
          <main>
            <div className="flex flex-row justify-between items-center mb-5">
              <BreadCrumb
                links={[
                  { href: '/', name: 'Home' },
                  { href: '#', name: i18n('entities.experience.menu') },
                ]}
              />
              <div className="flex flex-row gap-6">
                <Select
                  ref={profileRef}
                  onChange={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    handleRefreshTable();
                  }}
                >
                  <option></option>
                  {profiles.map((profile) => (
                    <option key={`profile-option-${profile.id}`} value={profile.id}>
                      {profile.name}
                    </option>
                  ))}
                </Select>
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
                  { key: 'id', label: 'entities.experience.fields.id', classes: ['text-right'], width: 150 },
                  {
                    key: 'since',
                    label: 'entities.experience.fields.since',
                    classes: ['whitespace-nowrap', 'text-right'],
                    width: 100,
                    render: renderExperiencePeriod,
                  },
                  {
                    key: 'until',
                    label: 'entities.experience.fields.until',
                    classes: ['whitespace-nowrap', 'text-right'],
                    width: 100,
                    render: renderExperiencePeriod,
                  },
                  { key: 'position', label: 'entities.experience.fields.position', width: 300 },
                  { key: 'company', label: 'entities.experience.fields.company' },
                  {
                    key: 'createdAt',
                    label: 'entities.experience.fields.createdAt',
                    classes: ['whitespace-nowrap', 'text-center'],
                    width: 0,
                    format: { moment: DEFAULT_MOMENT_FORMAT },
                  },
                  {
                    key: 'updatedAt',
                    label: 'entities.experience.fields.updatedAt',
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
        [loading, data, deleteConfirm, modal, profiles, handleRefreshTable, renderExperiencePeriod],
      )}
      {useMemo(
        () => (
          <ExperienceInfoModal
            onClose={() => setModal(null)}
            profileId={profileRef.current?.value || 0}
            recId={modal}
            handleRefresh={handleRefreshTable}
          />
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
