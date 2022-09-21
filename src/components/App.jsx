import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css'

class App extends Component {
  state = {
  contacts: [],
  filter: '',
}

  addContact = (newContact) => {
    const { contacts } = this.state;
    const { name } = newContact;
    const normalizedNameNewContract = name.toLowerCase();
    const contactNames = contacts.map(contact => {
      const contactName = contact.name;
      return contactName.toLowerCase()
    })
    if (contactNames.includes(normalizedNameNewContract)) {
      return alert(`${name} is already in contacts.`)
    }
    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }

  removeContact = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id)
      return {
        contacts: newContacts
      }
    })
  }

  handleChange = event => {
        this.setState({filter: event.currentTarget.value})
  }
  
  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      return normalizedName.includes(normalizedFilter)
    })

    return filteredContacts
  }

  render() {

    const contacts = this.getFilteredContacts();

    return <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      
      <ContactForm onSubmit={this.addContact} />

      <h2 className={css.title}>Contacts</h2>

      <Filter filter={this.state.filter} onChange={this.handleChange} />
      
      <ContactList contacts={contacts} removeContact={this.removeContact} />
      
    </div>
  }

}



export default App