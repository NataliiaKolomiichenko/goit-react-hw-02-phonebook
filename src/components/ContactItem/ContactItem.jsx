import PropTypes from 'prop-types'
import css from './ContactItem.module.css'

const ContactItem = ({name, number, id, removeContact}) => {
    return <li className={css.listItem}>{name}: {number} <button type="button" className={css.btn} onClick={() => removeContact(id)}>Delete</button></li>
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired,
}

export default ContactItem