import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsActions from '../../redux/contacts/contacts-actions';

import s from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={s.contactItem} key={id}>
              <p className={s.contactInfo}>
                {name}: {number}
              </p>
              <button
                className={s.deleteButton}
                id={id}
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.notification}>
          There are no contacts yet...
        </p>
      )}
    </>
  );
}

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;

  const visibleContacts = getVisibleContacts(items, filter);
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id =>
    dispatch(ContactsActions.deleteContact(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
