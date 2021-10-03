import React from 'react';
import Fetch from '../Utilitis/Utilitis';

const ContactUs = () => {
    const eee = Fetch();
    console.log(eee)
    return (
        <div>
            <h1>Contact us</h1>
        </div>
    );
};

export default ContactUs;