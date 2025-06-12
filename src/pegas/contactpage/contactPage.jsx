import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import ContactForm from '../../components/contactform/ContactForm';
import ContactList from '../../components/contactlist/ContactList';
import SearchBox from '../../components/searchbox/SearchBox';

import css from './contactPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>My contacts</h2>
      <ContactForm />
      <SearchBox />
      {contacts.length === 0 ? (
        <p className={css.empty}>You don't have any contacts yet.</p>
      ) : (
        <ContactList contacts={contacts} />
      )}
    </div>
  );
}
