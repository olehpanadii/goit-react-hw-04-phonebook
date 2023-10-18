import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import contactsList from '../data/data.json';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: contactsList,
    filter: '',
  };
  componentDidMount() {
    const localItem = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localItem);
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filteredContacts = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContactElement = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = newContactData => {
    const newContact = {
      id: nanoid(),
      name: newContactData.name,
      number: newContactData.number,
    };
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter sorted={filter} onChangeFilter={this.filteredContacts} />
        <ContactList
          items={visibleContacts}
          onDelete={this.deleteContactElement}
        />
      </Container>
    );
  }
}
