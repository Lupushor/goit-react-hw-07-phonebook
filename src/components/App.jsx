import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContatcList';

import { Filter } from './Filter/Filter';
import { Layout, Phonebook, PhonebookTitle } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </Phonebook>

      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Layout>
  );
};
