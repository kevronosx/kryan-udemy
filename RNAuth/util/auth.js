import axios from 'axios';

const API_KEY = `<API_KEY>`;
const BASE_URL = '<BASE_URL>';

export const authenticate = async (mode, email, password) => {
  const url = `${BASE_URL}/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = (email, password) =>
  authenticate('signUp', email, password);

export const login = (email, password) =>
  authenticate('signInWithPassword', email, password);
