import React from 'react';

const HeadPhoneDetail = () => {
    return (
        <div className='my-24 w-3/4 mx-auto'>
            <img data-aos="flip-right" className='w-1/2 mx-auto' src="https://www.apple.com/v/airpods-max/d/images/specs/hero_gray__6o1xqpyfsuay_large.jpg" alt="apple airpods max" />
            <div className='p-3 my-3' data-aos="fade-up-right">
                <h1 className='text-3xl font-bold'>Audio Technology</h1>
                <div className='border-y-2 mt-2'>
                    <p>Apple-designed dynamic driver</p>
                    <p>Active Noise Cancellation</p>
                    <p>Transparency mode</p>
                    <p>Spatial audio with dynamic head tracking1</p>
                    <p>Adaptive EQ</p>
                </div>
            </div>
            <div className='p-3 my-3' data-aos="fade-up-left">
                <h1 className='text-3xl font-bold'>Sensors</h1>
                <div className='border-y-2 mt-2 my-3'>
                    <p>Optical sensor (each ear cup)</p>
                    <p>Position sensor (each ear cup)</p>
                    <p>Case-detect sensor (each ear cup)</p>
                    <p>Accelerometer (each ear cup)</p>
                    <p>Gyroscope (left ear cup)</p>
                </div>
            </div>
            <div className='p-3 my-3' data-aos="fade-up-right">
                <h1 className='text-3xl font-bold'>Microphones</h1>
                <div className='border-y-2 mt-2 my-3'>
                    <p>Eight microphones for Active Noise Cancellation</p>
                    <p>Three microphones for voice pickup (two shared with Active Noise Cancellation and one additional microphone)</p>
                </div>
                <h1 className='text-3xl font-bold'>Chip</h1>
                <div className='border-y-2 mt-2'>
                    <p>Apple H1 headphone chip (each ear cup)</p>
                </div>
            </div>
        </div>
    );
};

export default HeadPhoneDetail;