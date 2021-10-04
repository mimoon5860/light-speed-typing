import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// single course details component 

const CourseDetail = () => {

    // facting data 
    const [allDetails, setAllDetails] = useState([])
    useEffect(() => {
        fetch('../../data.json')
            .then(res => res.json())
            .then(data => setAllDetails(data))
    }, [])
    const { courseId } = useParams()
    const detailCourse = allDetails.find(coursee => coursee.id === parseInt(courseId));

    // condition for dont run before load detail course 
    if (detailCourse) {
        const { Benefits, cost, details, discount, duration, img, instructor, title } = detailCourse;

        return (
            <div className='flex flex-col m-4 w-9/12 mx-auto'>
                <div>
                    <h1 className='text-center text-5xl font-black uppercase '>{title}</h1>
                </div>
                <div>
                    <img className='w-4/12 mx-auto m-4 rounded shadow-lg' src={img} alt="" />
                </div>
                <div className='my-4 p-2 rounded-xl border-2 shadow-lg border-gray-200'>
                    <div className='flex m-3'>
                        <div className='w-2/5'><h2 className='font-bold text-2xl'>Three Benefits of This Course:</h2>
                            <div>{Benefits.map(benefit => <Benefit key={benefit} benefits={benefit}></Benefit>)}</div>
                        </div>
                        <div className='w-3/5 text-justify'><p>{details}</p></div>
                    </div>
                    <div className='flex items-center m-3'>
                        <div className='text-3xl w-1/3 font-black'>
                            <h2 className='text-4xl font-bold text-yellow-600'>{discount}% DISCOUNT!</h2>
                            <h2>Course Cost: {cost}$</h2>
                        </div>
                        <div className='w-1/3'>
                            <h1 className='text-l text-2xl my-2 font-bold'>Course instructor: {instructor}</h1>
                            <h1 className='text-l font-bold text-gray-500'><span>Course Duration: </span>{duration}</h1>
                        </div>
                        <div className='flex gap-2 p-2 w-1/3'>
                            <Link to='/home' className='font-bold text-white rounded-md p-2 bg-green-500 hover:bg-green-700'>Back To Home</Link>
                            <Link to='/Courses' className='font-bold text-white rounded-md p-2 bg-green-500 hover:bg-green-700'><i className="fas fa-info-circle"></i> All Courses</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    } else {

        // Loading before Load details 
        return <><h3 className='text-center'>Loading...</h3></>;
    }
};


// simple component for show benefits 
const Benefit = props => {
    const benefit = props.benefits;
    return (
        <li className='font-bold text-gray-400'>{benefit}</li>
    );
}

export default CourseDetail;