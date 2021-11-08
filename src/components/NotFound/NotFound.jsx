import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not__found'>
            <div className="not__found__head">
                <h1>Nothing found</h1>
                <p>Try to correct search</p>
            </div>
            <div>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        </div>
    );
};

export default NotFound;