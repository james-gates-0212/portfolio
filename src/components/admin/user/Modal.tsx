'use client';

import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

interface IUser {
  key?: string;
  value?: string;
}

export default function UserInfoModal(props) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<IUser>({});
  const { onClose, recId } = props;
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
      })
      .catch((e) => {
        setSaving(false);
        console.error(e);
      });
  };

  useEffect(() => {
    if (recId <= 0 || loading) {
      return;
    }
    setLoading(true);
    console.log('here', recId, loading);
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
                <Label htmlFor="key" value="User Information Key" />
              </div>
              <TextInput id="key" ref={keyInputRef} placeholder="Key" defaultValue={data.key || ''} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="value" value="Value" />
              </div>
              <TextInput id="value" ref={valueInputRef} placeholder="value" defaultValue={data.value || ''} required />
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button onClick={() => onSave()} isProcessing={saving}>
          Save
        </Button>
        <Button color="gray" onClick={() => onClose()} disabled={saving}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}