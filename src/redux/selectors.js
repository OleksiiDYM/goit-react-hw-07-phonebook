// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectErrorStatus = state => state.contacts.error;

// export const getFilterNormalize = selectVisibleContacts;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
