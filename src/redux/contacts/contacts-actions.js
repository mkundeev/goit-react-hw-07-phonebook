import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deletContactRequest = createAction('contact/deletContactRequest');
export const deletContactSuccess = createAction('contact/deletContactSuccess');
export const deletContactError = createAction('contact/deletContactError');

export const fetchContactsRequest = createAction('contact/fetchContactRequest');
export const fetchContactsSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactsError = createAction('contact/fetchContactError');

export const changeFilter = createAction('filter/change');
