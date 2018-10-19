import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';
    // const urlNAme =  match.location.pathname;
    console.log(location.pathname)

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
            {urlNAme}
        </div>
    );
};

export default About;