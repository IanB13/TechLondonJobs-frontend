import React from 'react'

const LinkList =({Links})=>{
console.log(Links)
if(Links){
    return (
    <div>
    {Links.map( link => <IndividaulLink link ={link}/>)}
    </div>
)
}

else return null

}


const IndividaulLink = ({link}) => {

    return (
        <details>
            <summary>Title to go here</summary>
            <a href={link.url}>Link to Job Website </a> <br/>
            <a href={`https://tech.london/discovery/jobs/${link.jobID}`}>Link to Tech London Website </a>
        </details>
    )

}


export default LinkList;