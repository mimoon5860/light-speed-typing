import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error.png'

// Show Error Component 

const Error = () => {
    return (
        <div>
            <img className='w-1/4 mx-auto mt-20' src={img} alt="" />
            <div className='flex justify-center'>
                <Link to='/home' className='font-bold text-white rounded-md m-4 px-6 py-4 bg-red-500 hover:bg-red-700'><i className="fas fa-home"></i> Back To Home</Link>
            </div>
        </div>
    );
};

export default Error;