import React,{useState,useEffect} from 'react';
import APIRequests from './services/APIRequest';
import './App.css';
import LinkList from './components/LinkList';

function App() {
  const [jobLinks, changeJobLinks] = useState([{loading:true}]);
  
  useEffect(() => {
    APIRequests.getJobLinks().then(links => {
      changeJobLinks(links)
    })
  }, [])

  let deadLinks = undefined;
  let liveLinks =undefined;

if(!jobLinks.loading){
   deadLinks = jobLinks.filter(link => link.deadLink === true);
   liveLinks = jobLinks.filter(link => link.deadLink === false);
 
  return (
    <div className="App">
        <LinkList Links = {deadLinks}/>
    </div>
  );
}
else return <div>...loading </div>
}

export default App;
