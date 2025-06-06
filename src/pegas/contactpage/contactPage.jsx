import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contacts/selectors'; 
import css from './contactsPage.module.css';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={styles.container}>
      <h2 className={css.title}>Мої контакти</h2>
      {contacts.length === 0 ? (
        <p className={css.empty}>У вас поки немає жодного контакту.</p>
      ) : (
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <span className={css.name}>{contact.name}</span>: 
              <span className={css.phone}>{contact.phone}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
