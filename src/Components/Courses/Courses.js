import React from 'react';
import Fetch from '../Utilitis/Utilitis';
import ShowAllCourses from './ShowAllCourses/ShowAllCourses';

const Courses = () => {
    const courses = Fetch();
    return (
        <div>
            {courses.map(course => <ShowAllCourses course={course}></ShowAllCourses>)}
        </div>
    );
};

export default Courses;