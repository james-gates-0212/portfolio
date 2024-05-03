'use client';

import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { i18n } from '@/i18n';
import { IProfile } from '@/components/Interfaces';
import { useEffect, useRef, useState } from 'react';

export default function ProfileInfoModal(props) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<IProfile>({});
  const { onClose, recId, handleRefresh } = props;
  const nameInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const onSave = () => {
    setSaving(true);

    fetch(`/api/profile/${recId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInputRef.current?.value,
        description: descriptionInputRef.current?.value,
      }),
    })
      .then(async (response) => {
        setSaving(false);
        onClose();
        handleRefresh && handleRefresh.call(null);
      })
      .catch((e) => {
        setSaving(false);
        console.error(e);
      });
  };

  useEffect(() => {
    if (recId <= 0) {
      setData({});
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);

    fetch(`/api/profile/${recId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        setLoading(false);
        setData(await response.json());
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  }, [recId]);

  return (
    <Modal show={Boolean(recId)} size="md" popup onClose={() => !saving && onClose()} initialFocus={nameInputRef}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        {loading ? (
          <div className="flex flex-row justify-center">
            <Spinner size="xl" />
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value={i18n('entities.profile.fields.name')} />
              </div>
              <TextInput
                id="name"
                ref={nameInputRef}
                placeholder={i18n('entities.profile.fields.name')}
                defaultValue={data.name || ''}
                disabled={saving}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value={i18n('entities.profile.fields.description')} />
              </div>
              <TextInput
                id="description"
                ref={descriptionInputRef}
                placeholder={i18n('entities.profile.fields.description')}
                defaultValue={data.description || ''}
                disabled={saving}
                required
              />
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button onClick={() => onSave()} isProcessing={saving}>
          {i18n('common.save')}
        </Button>
        <Button color="gray" onClick={() => onClose()} disabled={saving}>
          {i18n('common.cancel')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
