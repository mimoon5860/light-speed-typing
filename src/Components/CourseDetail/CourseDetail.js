import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
            <div>
                <h3>{cost}</h3>
            </div>
        );
    }
    return <><h3>Loading...</h3></>;
};

export default CourseDetail;