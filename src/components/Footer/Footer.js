import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex justify-around items-center bg-slate-800 text-white'>
            <div className='flex flex-col p-5'>
                <p>Contact us:</p>
                <p>Phone: +037096-5743</p>
                <p>E-mail: trustreviewer@trust.com</p>
                <Link className='hover:text-blue-700' to="/about">About us</Link>
                <Link className='hover:text-blue-700' to="/blogs">Our blogs</Link>

            </div>
            <p className='p-3'><small>&copy; Copy right Trust Reviewer 2022. All right reserverd.</small></p>
        </div>
    );
};

export default Footer;