import React from 'react';
import css from './ConfirmModal.module.css';

export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.actions}>
          <button onClick={onConfirm} className={css.confirm}>Yes</button>
          <button onClick={onCancel} className={css.cancel}>No</button>
        </div>
      </div>
    </div>
  );
}