import s from "./App.module.css";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default function Phonebook() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ??
  //     defaultContacts
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     'contacts',
  //     JSON.stringify(contacts),
  //   );
  // }, [contacts]);

  // добавление контактов с проверкой на уникальность
  // const addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   if (contacts.some(contact => contact.name === name)) {
  //     alert(`${name} is already exist`);
  //   } else {
  //     setContacts([newContact, ...contacts]);
  //   }
  // };

  // удаление одного контакта по клику на кнопку "Delete"
  // const removeContact = contactId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactId),
  //   );
  // };

  // запись значения поля фильтра в стейт
  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // получение списка контактов по значению из фильтра
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
