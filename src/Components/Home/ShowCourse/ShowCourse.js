import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowCourse = props => {
    const { img, title, cost, discount, id } = props.course;
    return (
        <div className='bg-gray-500 items-center flex p-4'>
            <div>
                <img className='w-60' src={img} alt="" />
            </div>
            <div className='p-4 w-3/5'>
                <h2 className='text-2xl'>{title}</h2>
                <h2 className='text-3xl font-bold'>{discount}% DISCOUNT!</h2>
                <h2>Cost: ${cost}</h2>
                <div className='flex gap-2 p-2'>
                    <NavLink to={`/detail/${id}`} className='p-2 bg-gray-100'>Course Details</NavLink>
                    <NavLink to={`/detail/${id}`} className='p-2 bg-gray-100'>Buy Course</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;