import React from 'react'
import {List} from 'semantic-ui-react'

const LinkList =({Links,linkType})=>{
console.log(Links)


if(!(Links.length === 0)){
    return (
    <>
    <h2>{linkType}</h2>
    <List>
    {Links.map( link => <IndividaulLink link ={link} linkType ={linkType} key ={link._id}/>)}
    </List>
    </>
)
}

else return (
    <div>
        <h2>{linkType}</h2>
        <div>...loading</div>
    </div>
)

}


const IndividaulLink = ({link,linkType}) => {
    let icon = null;
    //for more  options in future
    switch (linkType) {
        case "Live":
            icon = "check circle outline"
            break;
    
        default:
            icon = "times circle outline"
            break;
    }

    return (
        <List.Item>
        <List.Icon name={icon} />
        <List.Content>
        <details>
            <summary>{link.jobTitle}</summary>
            <a href={link.url}>Link to Job Website </a> <br/>
            <a href={`https://tech.london/discovery/jobs/${link.jobID}`}>Link to Tech London Website </a>
        </details>
        </List.Content>
        </List.Item>
    )

}


export default LinkList;