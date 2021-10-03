import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShowCourse from './ShowCourse/ShowCourse';
import img from '../../images/main-image.png'
import Fetch from '../Utilitis/Utilitis';

const Home = () => {
    const courses = Fetch();
    console.log(courses)
    return (
        <div className='m-4 w-11/12  mx-auto'>
            <div className='flex items-center'>
                <div className='w-1/2'>
                    <div className='w-3/5 mx-auto leading-10'>
                        <h2 className='text-5xl tracking-wider uppercase '>LightSpeed</h2>
                        <h2 className='text-5xl tracking-wider uppercase '>Typing</h2>
                        <h3>Join Our Course if you wanna become a pro type master!</h3>
                        <NavLink className='p-2 bg-gray-100' to='/Details'>Details</NavLink>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img className='w-3/5 mx-auto' src={img} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 m-2 gap-4 mx-auto w-4/5'>
                {courses.map(course => <ShowCourse key={course.id} course={course}></ShowCourse>)}
            </div>
        </div>
    );
};

export default Home;