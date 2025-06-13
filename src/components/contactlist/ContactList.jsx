import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import ConfirmModal from '../modal/ConfirmModal';
import { toast } from 'react-hot-toast';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDelete = id => {
    setSelectedContact(id);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(selectedContact))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
        setSelectedContact(null);
      })
      .catch(() => {
        toast.error('Failed to delete contact');
        setSelectedContact(null);
      });
  };

  const cancelDelete = () => {
    setSelectedContact(null);
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}

      {selectedContact && (
        <ConfirmModal
          message="Are you sure you want to delete this contact?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </ul>
  );
}
