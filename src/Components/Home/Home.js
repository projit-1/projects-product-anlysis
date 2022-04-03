import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import bmwx6 from '../../image/bmwx6.jpg'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div>
            <div className="main-container">
                <div className="body">
                    <h1>
                        The Car You Want Next !!
                    </h1>

                    <p>High quality finishes, incredible and intuitive interface, tight build, sports car handling with SUV ride height. 5L v8 turbo has power to spare and then some. Don’t even need Sport mode but wow! it’s fun when you turn it on.</p>

                    <button>Live Demo</button>
                </div>
                <div className="product-pic">
                    <img src={bmwx6} alt="" />
                </div>
            </div>
            <div className="customer-reviews">
                <h2>Customers Reviews</h2>
                <div className='review-container'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div className="all-reviews">
                <button>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;