import React,{useEffect} from 'react';
//import APIRequests from './services/APIRequest';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LinkList from './components/LinkList';
import Summary from './components/Summary';
import {initializeJobPostings} from './reducers/actions'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeJobPostings()) 
  },[dispatch]) 


  const jobLinks = useSelector(state => state.jobPostings)


  const liveLinks = jobLinks.filter(link => link.deadLink === false);
  const deadLinks = jobLinks.filter(link => link.deadLink === true);
  const totalJobs = jobLinks.length;

  return (
    <div className="App container">
        <Summary totalJobs = {totalJobs} />
      <div>
        <LinkList Links ={liveLinks} linkType ="Live" />
      </div>
      <div>
        <LinkList Links = {deadLinks} linkType = "Dead" />
      </div>
    </div>
  );


}

export default App;
