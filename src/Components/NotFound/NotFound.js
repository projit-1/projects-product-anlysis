import React from 'react';
import notfound from '../../image/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;