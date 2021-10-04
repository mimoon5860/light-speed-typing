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
                <div className='flex p-2'>
                    <NavLink to={`/detail/${id}`} className='font-bold text-white rounded-md p-2 bg-green-500 hover:bg-green-700'><i class="fas fa-info"></i> Course Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;