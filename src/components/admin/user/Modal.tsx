'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';

export default function UserInfoModal(props) {
  const [loading, setLoading] = useState(false);
  const { onClose } = props;
  const keyInputRef = useRef<HTMLInputElement>(null);
  const valueInputRef = useRef<HTMLInputElement>(null);

  const onSave = () => {
    setLoading(true);

    fetch('/api/user/-1', {
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
        setLoading(false);
        onClose();
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  };

  return (
    <Modal show size="md" popup onClose={() => !loading && onClose()} initialFocus={keyInputRef}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="key" value="User Information Key" />
            </div>
            <TextInput id="key" ref={keyInputRef} placeholder="Key" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="value" value="Value" />
            </div>
            <TextInput id="value" ref={valueInputRef} placeholder="value" required />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onSave()} isProcessing={loading}>
          Save
        </Button>
        <Button color="gray" onClick={() => onClose()} disabled={loading}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
