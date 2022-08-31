import axios from 'axios'

export const request = axios.create({
  baseURL: '/api',
  timeout: 1000,
})