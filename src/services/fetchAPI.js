import axios from 'axios';

axios.defaults.baseURL = 'https://62c98fb9d9ead251e8bd78e1.mockapi.io';

export const getContactsFromDB = () => axios('/contacts');

export const addContactToDB = contact => axios.post('/contacts', contact);

export const deletContactFromDB = id => axios.delete(`/contacts/${id}`);
