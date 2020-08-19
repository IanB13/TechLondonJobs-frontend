import React from 'react';
const Summary = ({totalJobs}) =>{

    return(
        <div className ="summary">
            <h1>Tech.London Job Search </h1>
            <p className ="jobsNum">Total Jobs: { (totalJobs===1)?'...loading':totalJobs //would lead to issues if only one job TODO: fix
             }</p> 
            This web app uses puppeteer to web scrape <a href='https://tech.london/discovery/jobs'>Tech.London</a> and find jobs that are still available.
            Jobs were checked using Puppeteer, and said to be dead if the console has any HTTP server errors in the 400 - 599 range. 
            This method is <b>not 100% accurate </b> but works for the majority of cases.
            Check out the code <a href = 'https://github.com/IanB13/TechLondonJobs'>here</a>.
        </div>

    )
}

export default Summary;