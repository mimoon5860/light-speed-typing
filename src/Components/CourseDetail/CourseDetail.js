import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
    const [allDetails, setAllDetails] = useState([])
    useEffect(() => {
        fetch('../../data.json')
            .then(res => res.json())
            .then(data => setAllDetails(data))
    }, [])
    console.log(allDetails);
    const { courseId } = useParams()
    const detailCourse = allDetails.find(coursee => coursee.id == courseId);
    console.log(detailCourse)
    if (detailCourse) {
        const { Benefits, cost, details, discount, duration, img, instructor, title } = detailCourse;


        return (
            <div className='flex flex-col m-4 w-9/12 mx-auto'>
                <div>
                    <h1 className='text-center text-5xl font-black uppercase '>{title}</h1>
                </div>
                <div>
                    <img className='w-4/12 mx-auto m-3' src={img} alt="" />
                </div>
                <div className='flex m-3'>
                    <div className='w-2/5'><h2 className='font-bold text-2xl'>Three Benefits of This Course:</h2>
                        <div>{Benefits.map(benefit => Benefit(benefit))}</div>
                    </div>
                    <div className='w-3/5'><p>{details}</p></div>
                </div>
                <div className='flex items-center m-3'>
                    <div className='text-3xl w-2/4 font-black'>
                        <h2>{discount}% DISCOUNT!</h2>
                        <h2>Course Cost: {cost}</h2>
                    </div>
                    <div className='w-1/4'>
                        <h1 className='text-l font-bold'>Course instructor: {instructor}</h1>
                        <h1 className='text-l font-bold'><span>Course Duration: </span>{duration}</h1>
                    </div>
                    <div className='flex gap-2 p-2 w-1/4'>
                        <Link to='/home' className='font-bold text-white rounded-md p-2 bg-green-500 hover:bg-green-700'>Back To Home</Link>
                        <Link to='/Details' className='font-bold text-white rounded-md p-2 bg-green-500 hover:bg-green-700'>All Details</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return <><h3 className='text-center'>Loading...</h3></>;
    }
};

const Benefit = props => {
    const benefit = props;
    return (
        <li className='font-bold'>{benefit}</li>
    );
}

export default CourseDetail;