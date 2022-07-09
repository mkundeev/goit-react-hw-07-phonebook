import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import * as contactsOperations from '../redux/contacts/contacts-operations';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);

  const formSubmit = data => {
    console.log(data);
    if (contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact(data));
  };

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const handleDelet = id => dispatch(contactsOperations.deletContact(id));

  return (
    <div className="section">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter />
      {contacts && (
        <ContactList contacts={contacts} deletContact={handleDelet} />
      )}
    </div>
  );
}

export { App };
