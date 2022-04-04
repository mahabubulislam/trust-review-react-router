import React from 'react';
import useReviews from '../../hook/useReviews';
import Review from '../Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log('hello')
    return (
        <div>
            <h1>Hello{reviews.length}</h1>
            <h1 className='text-5xl font-bold text-center'>Customer Reviews (3)</h1>
           <div>
               {
                   reviews.map(review => <Review key={review.id} review={review}></Review>)
               }
           </div>
        </div>
    );
};

export default Reviews;