import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from './contacts-actions';
import * as contactActions from './contacts-actions';

const items = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactActions.deletContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

const isLoading = createReducer(false, {
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.deletContactRequest]: () => true,
  [contactActions.deletContactSuccess]: () => false,
  [contactActions.deletContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  isLoading,
});
