import React from 'react';
import img from '../../images/contact.png'

// Contact Us Component 

const ContactUs = () => {

    return (
        <div>
            <div className='w-1/3 m-4  mx-auto'>
                <img src={img} alt="" />
            </div>
            <div className='text-center pb-3 border-b-2'>
                <h1 className='text-4xl font-bold '>Contact Us</h1>
                <h3 className='font-medium'>Reach out us if you have any questions.</h3>
                <h3 className='font-medium'>We are here to help you.</h3>
            </div>
            <div className='flex justify-around text-center m-4'>
                <div>
                    <h1 className='font-medium'>General enquiries:</h1>
                    <h1 className='px-4 py-2 font-medium text-indigo-600 rounded-full bg-purple-300'>info@lightspeedtyping.com</h1>
                </div>
                <div>
                    <h1 className='font-medium'>Technical enquiries:</h1>
                    <h1 className='px-4 py-2 font-medium text-indigo-600 rounded-full bg-purple-300'>admin@lightspeedtyping.com</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;