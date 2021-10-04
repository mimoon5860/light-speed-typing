import React from 'react';
import img from '../../images/contact.png'

const ContactUs = () => {

    return (
        <div>
            <div className='w-1/3 m-4 mx-auto'>
                <img src={img} alt="" />
            </div>
            <div className='text-center m-4'>
                <h1 className=''>Contact Us</h1>
                <h3>Reach out us if you have any questions.</h3>
                <h3>We are here to help you.</h3>
            </div>
            <div className='flex justify-around text-center m-4'>
                <div>
                    <h1>General enquiries</h1>
                    <h1>info@lightspeedtyping.com</h1>
                </div>
                <div>
                    <h1>Technical enquiries</h1>
                    <h1>admin@lightspeedtyping.com</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;