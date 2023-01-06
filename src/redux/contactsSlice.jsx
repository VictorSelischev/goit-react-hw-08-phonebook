import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,addContact, deleteContact } from 'services/operations';

const contactsInitialState = {
  contacts: {
    items: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoader: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
     },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    
    [addContact.pending](state) { 
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) { 
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.unshift(action.payload);
    },
    [addContact.rejected](state, action) { 
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.contacts.isLoading = true
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id);
      state.contacts.items.splice(index, 1);
     },
    [deleteContact.rejected](state, action) { 
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.unshift(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
