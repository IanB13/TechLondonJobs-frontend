import React from 'react';
import {List} from 'semantic-ui-react';

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
        <List.Item style = {{"lineHeight": "1.6em"}}>
        <List.Icon name={icon} />
        <List.Content style = {{"lineHeight": "1.6em"}}> 
        <details>
            <summary>{link.jobTitle}</summary>
            <a href={link.url}>Link to Job Website </a> <br/>
            <a href={`https://tech.london/discovery/jobs/${link.jobID}`}>Link to Tech London Website </a>
        </details>
        </List.Content>
        </List.Item>
    )

}

export default IndividaulLink;