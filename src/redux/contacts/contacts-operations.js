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
    .then(() => dispatch(contactActions.deletContactSuccess()))
    .catch(error => {
      dispatch(contactActions.deletContactError());
      console.log(error.message);
    });
};
export const addContact = contact => dispatch => {
  dispatch(contactActions.addContactRequest());
  addContactToDB(contact)
    .then(results => {
      console.log(results);
      dispatch(contactActions.addContactSuccess());
    })
    .catch(error => {
      dispatch(contactActions.addContactError());
      console.log(error.message);
    });
};
