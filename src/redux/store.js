import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import { authReducer } from './auth/authSlice';

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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// WHITELIST
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'], // only navigation will be persisted
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
