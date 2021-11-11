import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';
import defaultContacts from '../../contacts.json';

const items = createReducer(defaultContacts, {
  [actions.addContact]: (state, { payload }) => {
    let namesArray = state.map(item => item.name);
    if (!namesArray.includes(payload.name)) {
      return [payload, ...state];
    } else {
      alert(`${payload.name} is already exist`);
      return state;
    }
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  filter,
});

// ========== vanilla Redux ==========
// import { combineReducers } from "redux";
// import { ADD, DELETE, CHANGE_FILTER } from "./contacts-types";
// import defaultContacts from "../../contacts.json";

// const items = (state = defaultContacts, { type, payload }) => {
//   switch (type) {
//     case ADD: {
//       let namesArray = state.map((item) => item.name);
//       if (!namesArray.includes(payload.name)) {
//         return [payload, ...state];
//       } else {
//         alert(`${payload.name} is already exist`);
//         return state;
//       }
//     }
//     // case ADD:
//     //   return [payload, ...state];

//     case DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
