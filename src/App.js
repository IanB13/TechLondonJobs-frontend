import React,{useEffect} from 'react';
//import APIRequests from './services/APIRequest';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import JobPostings from './components/JobPostings'

function App() {
  const [jobPostings, changeJobPostings] = useState([]);
  
  useEffect(() => {
    APIRequests.getJobLinks().then(links => {
      changeJobPostings(links)
    })
  }, [])


  return (
    <div className="App container">
      <JobPostings jobPostings = {jobPostings}/>
    </div>
  );


}

export default App;
