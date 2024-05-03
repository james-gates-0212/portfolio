'use client';

import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { i18n } from '@/i18n';
import { IUser } from '@/components/Interfaces';
import { useEffect, useRef, useState } from 'react';

export default function UserInfoModal(props) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<IUser>({});
  const { onClose, recId, handleRefresh } = props;
  const keyInputRef = useRef<HTMLInputElement>(null);
  const valueInputRef = useRef<HTMLInputElement>(null);

  const onSave = () => {
    setSaving(true);

    fetch(`/api/user/${recId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: keyInputRef.current?.value,
        value: valueInputRef.current?.value,
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

    fetch(`/api/user/${recId}`, {
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
    <Modal show={Boolean(recId)} size="md" popup onClose={() => !saving && onClose()} initialFocus={keyInputRef}>
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
                <Label htmlFor="key" value={i18n('entities.user.fields.key')} />
              </div>
              <TextInput
                id="key"
                ref={keyInputRef}
                placeholder={i18n('entities.user.fields.key')}
                defaultValue={data.key || ''}
                disabled={saving}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="value" value={i18n('entities.user.fields.value')} />
              </div>
              <TextInput
                id="value"
                ref={valueInputRef}
                placeholder={i18n('entities.user.fields.value')}
                defaultValue={data.value || ''}
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
