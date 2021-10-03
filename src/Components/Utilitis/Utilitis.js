import { useEffect, useState } from "react";

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