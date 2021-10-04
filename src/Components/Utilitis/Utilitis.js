import { useEffect, useState } from "react";


// Fetching function for use many components 

const Fetch = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return courses;
}

export default Fetch;