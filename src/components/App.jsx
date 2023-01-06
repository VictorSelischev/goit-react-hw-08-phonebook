import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchContacts } from 'services/operations';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      //   backgroundColor: '#c0ddff',
      // }}
    >
      <AppBar />

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={ <RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
      </Routes>

      {/* <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <b>Loading Phone contacts...</b>}
        <ContactsList />
      </Section> */}
    </div>
  );
};
