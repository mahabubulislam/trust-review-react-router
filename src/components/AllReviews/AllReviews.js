import React from 'react';
import useReviews from '../../hook/useReviews';
import Review from '../Review';

const AllReviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='w-4/5 mx-auto my-5'>
            <h1 className='text-5xl font-bold text-center'>What our Customer say!</h1>
           <div className='grid grid-cols-1 gap-5 md:grid-cols-3 my-2'>
               {
                   reviews.map(review => <Review key={review.id} review={review}></Review>)
               }
           </div>
        </div>
    );
};

export default AllReviews;