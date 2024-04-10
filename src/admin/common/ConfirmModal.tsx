'use client';

import { i18n } from '@/i18n';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

interface IConfirmModal {
  message?: string;
  onCancel?: Function;
  onClose: Function;
  onConfirm?: Function;
  show: boolean;
  textCancel?: string;
  textConfirm?: string;
}

export default function ConfirmModal(props: IConfirmModal) {
  const { message, onCancel, onClose, onConfirm, show, textCancel, textConfirm } = props;

  const handleCancel = () => (onCancel ? onCancel.call(null) : handleClose());
  const handleClose = () => onClose && onClose.call(null);
  const handleConfirm = () => onConfirm && onConfirm.call(null);

  return (
    <Modal show={show} size="md" onClose={handleClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {i18n(message || 'questions.default')}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleConfirm}>
              {i18n(textConfirm || 'common.yes')}
            </Button>
            <Button color="gray" onClick={handleCancel}>
              {i18n(textCancel || 'common.no')}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
