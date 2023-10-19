import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import contactsList from '../data/data.json';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localItem = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localItem);
    if (parsedContacts !== null) {
      return parsedContacts;
    }
    return contactsList;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = newFilter => {
    setFilter(newFilter);
  };

  const deleteContactElement = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = newContactData => {
    const newContact = {
      id: nanoid(),
      name: newContactData.name,
      number: newContactData.number,
    };
    if (contacts.some(contact => contact.name === newContact.name)) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter sorted={filter} onChangeFilter={filteredContacts} />
      <ContactList items={visibleContacts} onDelete={deleteContactElement} />
    </Container>
  );
};
