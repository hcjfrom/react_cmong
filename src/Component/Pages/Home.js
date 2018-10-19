import React from 'react';

const Home = (match) => {
    const name = match.location.pathname
    return (
        <div>
            <h2>
                홈
            </h2>
            <div>222</div>
            <div>{name}</div>
        </div>
    );
};

export default Home;