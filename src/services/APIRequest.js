import axios from 'axios';
let baseURL = "/api"
// development , test and production are pre-defined 
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:4000/api'
}
const getJobLinks = async () => {
  const jobLinks = await axios.get(`${baseURL}/joblinks`)
  return jobLinks.data
}

export default {
  getJobLinks
}