import React from 'react';

const Review = ({ review }) => {
    const { userName, userImg, reviewText, rating } = review
    return (
            <div class="py-8 px-8 flex-col justify-center items-center shadow-xl shadow-slate-300 hover:shadow-2xl hover:scale-105 ease-in duration-300">
                <img class=" mx-auto h-16 w-16 rounded-full  " src={userImg} alt="Customer" />
                <div class="text-center space-y-2 ">
                    <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                            {userName}
                        </p>
                        <p class="text-slate-500 font-medium">
                            {reviewText}
                        </p>
                        <p>Rating: <small>{rating}</small></p>
                    </div>
                </div>
            </div>
    );
};

export default Review;