import React from 'react';
const Summary = () =>{

    return(
        <div className ="summary">
           This web app uses puppeteer to web scrape <a href='https://tech.london/discovery/jobs'>Tech.London</a> and find jobs that are still available.
            Jobs were checked by following the page url and check if the console has any HTTP server errors in the 400 or 500s range. 
            This method is not 100% accurate but works for the majority of cases.
            Check out the code here

        </div>

    )
}

export default Summary;