import React,{useState,useEffect} from 'react';
import APIRequests from './services/APIRequest';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
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
