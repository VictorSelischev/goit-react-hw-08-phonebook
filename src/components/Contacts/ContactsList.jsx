import css from './ContactsList.module.css';
import { ContactElement } from './ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';

export const ContactsList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactElement contact={contact} />
        </li>
      ))}
    </ul>
  );
};
