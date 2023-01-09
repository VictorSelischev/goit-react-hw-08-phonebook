import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/ContactsList';

import { fetchContacts } from 'redux/contacts/contactsOperation';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <b>Loading Phone contacts...</b>}
        <ContactsList />
      </Section>
    </div>
  );
};

export default Contacts;
