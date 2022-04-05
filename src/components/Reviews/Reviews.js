import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    const navigate = useNavigate()
    return (
        <div className='w-4/5 mx-auto my-5'>
            <h1 className='text-5xl font-bold text-center'>Customer Reviews (3)</h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 my-2'>
                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
            <div className='mx-auto w-1/5'>
                <button onClick={()=>navigate('/reviews')} className='rounded-full text-2xl bg-emerald-500 p-2 my-3 outline-1 shadow-lg shadow-emerald-500 hover:shadow-rose-500/50 hover:bg-rose-500 hover:scale-105'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Reviews;