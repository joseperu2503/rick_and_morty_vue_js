import axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api'

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export {http, apiUrl};
