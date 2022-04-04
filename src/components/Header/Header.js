import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center p-4 bg-white shadow-sm sticky top-0'>
           <CustomLink to='/home'>Home</CustomLink>
           <CustomLink to='/reviews'>Reviews</CustomLink>
           <CustomLink to='/dashboard'>Dashboard</CustomLink>
           <CustomLink to='/blogs'>Blogs</CustomLink>
           <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;