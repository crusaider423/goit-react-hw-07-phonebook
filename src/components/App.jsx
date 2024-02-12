import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../redux/filter/filter-slice';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from '../redux/contacts/contacts-operations';
import {
  selectContacts,
  selectFilteredContacts,
} from '../redux/contacts/contacts-selectors';
import { selectFilter } from '../redux/filter/filter-selectors';
import { ContactForm, Filter, ContactList } from './index';
import css from './App.module.css';

export const App = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onChangeFilter = ({ target: { value } }) =>
    dispatch(filterContact(value));
  const onDeleteContact = itemId => dispatch(deleteContact(itemId));
  const onAddContact = stateForm => dispatch(addContact(stateForm));

  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter
        title={'Find contacts by name'}
        filter={filter}
        changeFilter={onChangeFilter}
      />
      {isLoading && <p>....Loading</p>}
      {error && <p>{error}</p>}
      <ContactList contacts={contacts} deleteContact={onDeleteContact} />
    </div>
  );
};
