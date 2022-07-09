import * as contactActions from './contacts-actions';
import {
  addContactToDB,
  deletContactFromDB,
  getContactsFromDB,
} from 'services/fetchAPI';

export const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());
  getContactsFromDB()
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))
    .catch(error => {
      dispatch(contactActions.fetchContactsError());
      console.log(error.message);
    });
};

export const deletContact = id => dispatch => {
  dispatch(contactActions.deletContactRequest());
  deletContactFromDB(id)
    .then(({ data }) => dispatch(contactActions.deletContactSuccess(data.id)))
    .catch(error => {
      dispatch(contactActions.deletContactError());
      console.log(error.message);
    });
};
export const addContact = contact => dispatch => {
  dispatch(contactActions.addContactRequest());
  addContactToDB(contact)
    .then(({ data }) => {
      dispatch(contactActions.addContactSuccess(data));
    })
    .catch(error => {
      dispatch(contactActions.addContactError());
      console.log(error.message);
    });
};
