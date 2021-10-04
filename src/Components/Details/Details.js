import React from 'react';
import Fetch from '../Utilitis/Utilitis';
import ShowAllDetails from './ShowAllDetails/ShowAllDetails';

const Details = () => {
    const courses = Fetch();
    return (
        <div>
            {courses.map(course => <ShowAllDetails course={course}></ShowAllDetails>)}
        </div>
    );
};

export default Details;