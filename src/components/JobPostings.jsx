import React from 'react';
import LinkList from './LinkList';
import Summary from './Summary';

const JobPostings = ({ jobPostings }) => {

    const liveLinks = jobPostings.filter(link => link.deadLink === false);
    const deadLinks = jobPostings.filter(link => link.deadLink === true);
    const totalJobs = jobPostings.length;

    return (
        <>
            <Summary totalJobs={totalJobs} />
            <div>
                <LinkList Links={liveLinks} linkType="Live" />
            </div>
            <div>
                <LinkList Links={deadLinks} linkType="Dead" />
            </div>
        </>
    )
}

export default JobPostings;