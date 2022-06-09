import PropTypes from "prop-types";

import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
  const elements = contacts.map(contact => (
      <li className={styles.item} key={contact.id}>
        <p className={styles.text}>{contact.name}: {contact.number}</p>
        <button className={styles.button} type="button" onClick={() => onDelete(contact.id)}>Delete</button>
      </li>
    ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        number: PropTypes.string,
    }
    )).isRequired,
    onDelete: PropTypes.func,
}
