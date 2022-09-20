import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'


class ContactForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
  }
  
    state = {
        name: '',
        number: '',
    };
    
    handleChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;
        const newContactId = nanoid();
        this.props.onSubmit({ id: newContactId, name, number });
        this.reset();
    }

  reset = () => {
    this.setState({
        name: '',
        number: ''
    })
  }

    render() {
        const { name, number } = this.state;

      return <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.inputLabel}> Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </label>
        
        <label className={css.inputLabel}> Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </label>
        
        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    }
}

export default ContactForm;