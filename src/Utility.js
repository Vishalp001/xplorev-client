import axios from 'axios'
export const Axios = axios.create({
  baseURL: 'https://xplorev.herokuapp.com/api/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: localStorage.getItem('ltk') || '',
  },
  maxContentLength: 20 * 1000 * 1000, // bytes => 5 MB
})
