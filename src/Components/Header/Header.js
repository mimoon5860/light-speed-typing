import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Header Component 
const Header = () => {
    return (
        <div className='bg-purple-500 text-white'>
            <div className='flex justify-between w-10/12 mx-auto p-1.5 items-center'>
                <Link to='/'>
                    <div className='text-4xl flex flex-col items-end italic font-black uppercase'>
                        <h2>LightSpeed</h2>
                        <h2><i className="fas fa-bolt"></i> Typing</h2>
                    </div>
                </Link>
                <div className='text-l gap-3 flex font-bold'>
                    <NavLink className='p-3 hover:bg-purple-700 rounded' to='/Home'><i className="fas fa-home"></i> Home</NavLink>
                    <NavLink className='p-3 hover:bg-purple-700 rounded' to='/Courses'><i className="fas fa-info-circle"></i> All Courses</NavLink>
                    <NavLink className='p-3 hover:bg-purple-700 rounded' to='/About'><i className="fas fa-question-circle"></i> About</NavLink>
                    <NavLink className='p-3 hover:bg-purple-700 rounded' to='/ContactUs'><i className="far fa-address-book"></i> Contact us</NavLink>
                </div>
            </div >
        </div>
    );
};

export default Header;