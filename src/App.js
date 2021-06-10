
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/Contactlist';
import Filter from './components/Filter/Filter';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;