import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto p-1.5 items-center bg-red-300'>
            <div className='text-3xl font-black uppercase'>
                <h2>LightSpeed</h2>
                <h2>Typing</h2>
            </div>
            <div className='text-2xl gap-3 flex'>
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/Details'>Details</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/ContactUs'>Contact us</NavLink>
            </div>
        </div >
    );
};

export default Header;