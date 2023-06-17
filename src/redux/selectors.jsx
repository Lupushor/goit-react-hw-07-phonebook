// export const getContacts = ({ contacts: { items } }) => items;
// export const getFilter = ({ filter }) => filter;

import { createSelector } from "@reduxjs/toolkit";

// export const getFilterContacts = ({ contacts: { items }, filter }) => {
//   if (!filter) {
//     return items;
//   }
//   return items.filter(
//     ({ name, number }) =>
//       name.toLowerCase().includes(filter.toLowerCase()) ||
//       number.includes(filter)
//   );
// };

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);