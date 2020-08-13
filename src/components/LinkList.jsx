import React from 'react';
import {List} from 'semantic-ui-react';
import IndividaulLink from './IndividualLink';

const LinkList = ({ Links: links, linkType }) => {
    let h2style = null;
    //for more  options in future
    switch (linkType) {
        case "Live":
            h2style = { "border-color": "green" }
            break;

        default:
            h2style = { "border-color": "red" }
            break;
    }

    if (!(links.length === 0)) {
        return (
            <>
                <h2 style={h2style}>{linkType} Job Links</h2>
                <p className ="jobsNum">Total Jobs: {links.length}</p> 
                <List>
                    {links.map(link => <IndividaulLink link={link} linkType={linkType} key={link._id} />)}
                </List>
            </>
        )
    }

    else return (
        <div>
            <h2 style={h2style}>{linkType} Job Links</h2>
            <div>...loading</div>
        </div>
    )

}

export default LinkList;