// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  // connect,
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  const onDelete = id => dispatch(deleteContact(id));

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
          There are no contacts...
        </p>
      )}
    </>
  );
}

// ========== до использования useSelector и useDispatch ==========
// const getVisibleContacts = (items, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => {
//   console.log(state);
//   const { items, filter } = state.contacts;

//   const visibleContacts = getVisibleContacts(items, filter);
//   return { contacts: visibleContacts };
// };
//
// const mapDispatchToProps = dispatch => ({
//   onDelete: id =>
//     dispatch(ContactsOperations.deleteContact(id)),
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ContactList);
//
// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
