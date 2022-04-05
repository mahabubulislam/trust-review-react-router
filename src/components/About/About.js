import React from 'react';

const About = () => {
    return (
        <div data-aos="fade-right" className='flex flex-col md:flex-row-reverse justify-between items-center w-auto md:w-3/4 mx-auto my-24'>
            <div className='order-2'>
                <h1 className='text-4xl font-bold my-4'>We're Trust Reviewer.</h1>
                <p>
                    Trust Reviewer hosts reviews to help consumers shop with confidence, and deliver rich insights to help businesses improve the experiences they offer. The more consumers use our platform and share their own opinions, the richer the insights we offer businesses, and the more opportunities they have to earn the trust of consumers from all around the world.
                </p>
            </div>
            <img className='w-96 md:w-1/2 order-1' src="https://neilpatel.com/wp-content/uploads/2021/02/review-sites-7.png" alt="" />
        </div>
    );
};

export default About;