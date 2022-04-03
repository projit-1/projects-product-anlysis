import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviwes = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div >
            <h1> Customer Reviews</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)

                }
            </div>

        </div>
    );
};

export default Reviwes;
