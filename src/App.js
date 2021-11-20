import  { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Contact from './components/ContactList/Contact';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import { useFetchContactsQuery } from './redux/contactSlice';

function App() {
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);

  // const filteredContacts = [...contacts].filter(({ name }) =>
  //   name.toLowerCase().includes(filter),
  // );
 
  const { data: contacts } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);

  const filterContacts = contacts =>
    contacts
      ? [...contacts].filter(({ name }) => name.toLowerCase().includes(filter))
      : null;

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm contacts={contacts}/>
        <h2 className="title">Contacts</h2>
        <Filter  />      

      <ContactList>
         {filterContacts(contacts) &&
          filterContacts(contacts).map(contact => (
            <Contact key={uuidv4()} contact={contact} />
          ))}
        </ContactList>
      </div>
    );
  }

export default App;
