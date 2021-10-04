import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllDetails = props => {
    const { cost, details, discount, duration, img, instructor, title, id } = props.course;
    return (
        <div className='flex gap-5 m-4 items-center border p-2'>
            <div className='w-1/4'>
                <img className='w-96' src={img} alt="" />
            </div>
            <div className='w-2/4'>
                <h1 className=''>{title}</h1>
                <h1>Course instruscor: {instructor}</h1>
                <h1>{details}</h1>
            </div>
            <div className='w-1/4 gap-2 flex flex-col'>
                <h1>{discount}% Discount Now!</h1>
                <h1>Course Cost: {cost}</h1>
                <h1>Course Duration: {duration}</h1>
                <Link className='font-bold text-center w-1/4 text-white rounded-md p-2 bg-green-500 hover:bg-green-700' to={`/detail/${id}`} >Details</Link>
            </div>
        </div>
    );
};

export default ShowAllDetails;