import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log(contacts);
    console.log(filter);
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  }
);

// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   console.log(contacts);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };
