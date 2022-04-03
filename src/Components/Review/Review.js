import React from 'react';
import './Review.css'

const Review = (props) => {
    const { img, name, ratings, comment } = props.review;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small> Ratings : {ratings}</small> </p>
            <p>Comment : {comment}</p>
        </div>
    );
};

export default Review;