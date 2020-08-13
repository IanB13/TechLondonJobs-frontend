import React,{useState,useEffect} from 'react';
import APIRequests from './services/APIRequest';
import './App.css';
import LinkList from './components/LinkList';
import Summary from './components/Summary';

function App() {
  const [jobLinks, changeJobLinks] = useState([{loading:true}]);
  
  useEffect(() => {
    APIRequests.getJobLinks().then(links => {
      changeJobLinks(links)
    })
  }, [])

  const liveLinks = jobLinks.filter(link => link.deadLink === false);
  const deadLinks = jobLinks.filter(link => link.deadLink === true);
 
  return (
    <div className="App container">
        <Summary />
        <LinkList Links ={liveLinks} linkType ="Live Links" />
        <LinkList Links = {deadLinks} linkType = "Dead Links" />
    </div>
  );


}

export default App;
