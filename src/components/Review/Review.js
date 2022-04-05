import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
    const { userName, userImg, reviewText, rating } = review
    return (
        <div class="py-8 px-8 my-7 flex-col justify-center items-center shadow-xl shadow-slate-300 hover:shadow-2xl hover:scale-105 ease-in duration-300">
            <img class=" mx-auto h-16 w-16 rounded-full  " src={userImg} alt="Customer" />
            <div class="text-center">
                <div>
                    <p class="text-lg text-black font-semibold my-2">
                        {userName}
                    </p>
                    <div className='flex justify-between my-3'>
                        <p>Rating: <small>{rating}</small></p>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: '#facc15' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </div>
                    <p class="text-slate-500 font-medium ">
                        {reviewText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;