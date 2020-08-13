import axios from 'axios';

const getJobLinks = async () =>{
    const jobLinks = await axios.get('http://localhost:4000/api/joblinks') //need to update for development
    return jobLinks.data
  }

export default {
    getJobLinks
}