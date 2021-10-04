import React from 'react';
import { Link } from 'react-router-dom';


// Component for Show All Course after map 

const ShowAllCourses = props => {
    const { cost, details, discount, duration, img, instructor, title, id } = props.course;
    return (
        <div className='flex gap-5 m-4 bg-purple-200 bg-opacity-50 shadow-lg rounded-md items-center border p-2'>
            <div className='w-1/4'>
                <img className='w-96 rounded-md' src={img} alt="" />
            </div>
            <div className='w-2/4'>
                <h1 className='text-3xl my-3 font-medium'>{title}</h1>
                <h1 className='text-xl my-2 font-medium'>Course instrustor: {instructor}</h1>
                <h1 className='text-justify'>{details}</h1>
            </div>
            <div className='w-1/4 gap-2 ml-4 flex flex-col'>
                <h1 className='text-4xl font-bold text-yellow-600'>{discount}% Discount Now!</h1>
                <h1 className='text-2xl font-medium'>Course Cost: {cost}$</h1>
                <h1 className='text-xl'>Course Duration: {duration}</h1>
                <Link className='font-bold text-center w-1/4 text-white rounded-md p-2 bg-green-500 hover:bg-green-700' to={`/detail/${id}`} ><i className="fas fa-info"></i> Details</Link>
            </div>
        </div>
    );
};

export default ShowAllCourses;