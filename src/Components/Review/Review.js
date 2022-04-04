import React from 'react';
import './Review.css'

const Review = (props) => {
    const { img, name, ratings, comment } = props.review;
    return (
        <div className='review'>
            <div className='review-style'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p><small> Ratings : {ratings}</small> </p>
            </div>
            <div className='comment'>
                <p>Comment : {comment}</p>
            </div>
        </div>
    );
};

export default Review;