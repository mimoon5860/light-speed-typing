import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowCourse = props => {
    const { img, title, cost, discount, id } = props.course;
    return (
        <div className='bg-purple-200 bg-opacity-50 shadow-lg rounded-lg items-center flex p-2'>
            <div>
                <img className=' rounded-lg w-60' src={img} alt="" />
            </div>
            <div className='pl-4 w-3/5'>
                <h2 className='text-2xl my-4 font-medium'>{title}</h2>
                <h2 className='text-3xl font-bold'>{discount}% DISCOUNT!</h2>
                <h2 className='text-3xl font-bold'>Cost: ${cost}</h2>
                <div className='flex p-2'>
                    <NavLink to={`/detail/${id}`} className='font-bold text-white rounded-md p-2 bg-green-500 hover:bg-green-700'><i className="fas fa-info"></i> Course Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;