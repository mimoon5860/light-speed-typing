import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error.png'

const Error = () => {
    return (
        <div>
            <img className='w-1/4 mx-auto m-4' src={img} alt="" />
            <div className='flex justify-center'>
                <Link to='/home' className='font-bold text-white rounded-md px-6 py-4 bg-red-500 hover:bg-red-700'>Back To Home</Link>
            </div>
        </div>
    );
};

export default Error;