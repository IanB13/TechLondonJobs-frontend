import React, { useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { initializeJobPostings } from './reducers/actions';
import { useSelector, useDispatch } from 'react-redux';
import JobPostings from './components/JobPostings';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeJobPostings())
  }, [dispatch])


  const jobPostings = useSelector(state => state.jobPostings)


  return (
    <div className="App container">
      <JobPostings jobPostings={jobPostings} />
    </div>
  );


}

export default App;
