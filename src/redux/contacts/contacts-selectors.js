import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filter-selectors';
export const selectContacts = store => store.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const { items } = contacts;
    if (!filter) {
      return items;
    }
    const normalizedFilter = filter.toLowerCase().trim();
    return items.filter(({ name, phone }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        phone.toLowerCase().includes(normalizedFilter)
      );
    });
  }
);
