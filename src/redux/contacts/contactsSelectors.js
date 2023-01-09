import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/filterSelector";

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectVisibleContacts = createSelector([selectFilter, selectContacts], (filter, items) => {
  const normalizedFilter = filter.toLowerCase();
  const contacts = items;

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
});