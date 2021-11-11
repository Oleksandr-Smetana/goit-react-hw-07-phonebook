import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactsActions from '../../redux/contacts/contacts-actions';

import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: evt =>
    dispatch(
      ContactsActions.changeFilter(evt.currentTarget.value),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
