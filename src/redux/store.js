import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import contactsReducers from './contacts/contacts-reducers';

const getMiddleware = getDefaultMiddleware =>
  process.env.NODE_ENV === 'development'
    ? getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      }).concat(logger)
    : getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      });

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(
      contactsPersistConfig,
      contactsReducers,
    ),
  },
  middleware: getMiddleware,
  devTools: process.env.NODE_ENV === 'development', // devTools применяются тлько в разработке
});

const persistor = persistStore(store);

export default { store, persistor };

// ========== vanilla Redux ==========
// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducers from './contacts/contacts-reducers';

// const rootReducer = combineReducers({
//   contacts: contactsReducers,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(),
// );

// export default store;
