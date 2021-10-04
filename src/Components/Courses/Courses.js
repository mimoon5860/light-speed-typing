import React from 'react';
import Fetch from '../Utilitis/Utilitis';
import ShowAllCourses from './ShowAllCourses/ShowAllCourses';

// All Courses Component 

const Courses = () => {
    const courses = Fetch();
    return (
        <div>
            {courses.map(course => <ShowAllCourses key={course.id} course={course}></ShowAllCourses>)}
        </div>
    );
};

export default Courses;