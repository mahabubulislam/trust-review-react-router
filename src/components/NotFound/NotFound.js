import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from './notFound.png'
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='w-3/4 mx-auto my-24'>
            <img data-aos="zoom-in-up" className=' mx-auto' src={notFound} alt="" />
            <div className='mx-auto w-1/6'>
                <button onClick={()=>navigate('/')} className='rounded-lg  md:text-2xl bg-purple-600 p-2 my-3 outline-1 shadow-lg shadow-purple-600 hover:shadow-rose-500/50 hover:bg-rose-500 hover:scale-105'>Go to Home</button>
            </div>
        </div>
    );
};

export default NotFound;