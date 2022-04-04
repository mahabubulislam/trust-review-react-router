import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-center items-center w-3/4 mx-auto my-24'>
            <div className='w-3/5'>
                <h1 className='text-4xl font-bold'>
                    AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.
                </h1>
                <p>
                    The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.
                </p>
                <button className='rounded-full text-2xl bg-emerald-500 p-2 my-3 outline-1 shadow-lg shadow-emerald-500 hover:shadow-rose-500/50 hover:bg-rose-500 hover:scale-105'>Specifications</button>
            </div>
            <div>
                <img className='w-36 md:w-80 lg:w-96' src="https://www.apple.com/v/airpods-max/d/images/overview/hero__gnfk5g59t0qe_large.png" alt="apple headphone" />
            </div>
        </div>
    );
};

export default Home;