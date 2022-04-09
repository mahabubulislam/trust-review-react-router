import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-[900]'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl font-bold mr-1 pt-2'>
                        Trust Reviews
                    </span>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <CustomLink  className='md:ml-8 text-xl md:my-0 my-7' to='/home'>Home</CustomLink>
                    <CustomLink  className='md:ml-8 text-xl md:my-0 my-7' to='/reviews'>Reviews</CustomLink>
                    <CustomLink  className='md:ml-8 text-xl md:my-0 my-7' to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink  className='md:ml-8 text-xl md:my-0 my-7' to='/blogs'>Blogs</CustomLink>
                    <CustomLink  className='md:ml-8 text-xl md:my-0 my-7' to='/about'>About</CustomLink>
                </ul>
            </div>
        </div>
    )
}

export default Header;