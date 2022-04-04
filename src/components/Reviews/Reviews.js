import React from 'react';
import useReviews from '../../hook/useReviews';
import Review from '../Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log('hello')
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Customer Reviews (3)</h1>
           <div className='grid grid-cols-1 gap-5 md:grid-cols-3 my-2'>
               {
                   reviews.slice(0,3).map(review => <Review key={review.id} review={review}></Review>)
               }
           </div>
        </div>
    );
};

export default Reviews;