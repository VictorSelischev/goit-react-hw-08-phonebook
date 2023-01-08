import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";

import { Section } from "components/Section/Section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/Contacts/ContactsList";


const Contacts = () => {

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
