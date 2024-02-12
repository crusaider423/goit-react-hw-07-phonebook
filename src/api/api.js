import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65c3db0e4ac991e8059b284b.mockapi.io/api/contacts',
});

export const fetchContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const fetchAddContact = async obj => {
  const { data } = await instance.post('/', obj);
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
