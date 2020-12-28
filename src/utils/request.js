import axios from 'axios'

const fetch = axios.create({
  baseURL: '',
  timeout: 10000
})

export default fetch