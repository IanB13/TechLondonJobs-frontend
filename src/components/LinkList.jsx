import React from 'react'

const LinkList =({Links,linkType})=>{
console.log(Links)
if(!(Links.length === 0)){
    return (
    <div>
    <h2>{linkType}</h2>
    <ul>
    {Links.map( link => <IndividaulLink link ={link} key ={link._id}/>)}
    </ul>
    </div>
)
}

else return (
    <div>
        <h2>{linkType}</h2>
        <div>...loading</div>
    </div>
)

}


const IndividaulLink = ({link}) => {

    return (
        <li >
        <details>
            <summary>{link.jobTitle}</summary>
            <a href={link.url}>Link to Job Website </a> <br/>
            <a href={`https://tech.london/discovery/jobs/${link.jobID}`}>Link to Tech London Website </a>
        </details>
        </li>
    )

}


export default LinkList;