import PropTypes from 'prop-types'
import ContactItem from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

const ContactList = ({ contacts, removeContact }) => {
    return <ul className={css.list}>
        {contacts.map(contact => {
            return <ContactItem name={contact.name} number={contact.number} key={contact.id} id={contact.id} removeContact={removeContact} />
      })}
      </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    removeContact: PropTypes.func.isRequired,
}

export default ContactList