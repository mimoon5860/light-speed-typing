import React from 'react';
import img from '../../images/about.png'

const About = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
                <img className='w-auto' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <h1 className='text-4xl font-bold text-purple-400 italic'>LightSpeed Typing</h1>
                <h1 className='text-9xl mb-4 text-pink-300 italic font-black'>About Us</h1>
                <div className='text-justify w-3/4'>
                    <p>LightSpeed Typing is the most effective way to learn how to type. It is web based, and highly effective. LightSpeed Typing is (and will always be) free for both individuals and schools. There is an optional paid school edition.</p>
                    <hr />
                    <h1 className='text-2xl mt-4 p-2 bg-yellow-100 mb-2 border-l-4 border-yellow-500 font-medium'>How Does it Work?</h1>
                    <p>Keep practicing each lesson until you get all five stars. It really doesn't take much to learn, a few minutes a day for one to two weeks and you will be a pro!</p>
                    <hr />
                    <h1 className='text-2xl mt-4 p-2 bg-yellow-100 mb-2 border-l-4 border-yellow-500 font-medium'>Do I need an account?</h1>
                    <p>You do not need to create an account. However, as you go through the lessons, you can create an optional profile in order to save your progress.</p>
                    <hr />
                    <h1 className='text-2xl mt-4 p-2 bg-yellow-100 mb-2 border-l-4 border-yellow-500 font-medium'>About us</h1>
                    <p>We are a team of developers, designers, and content creators based in Rockville, Maryland. Our focus is on creating cutting edge educational platforms designed to enhance your students’ learning experience.</p>
                </div>
            </div>
        </div>
    );
};

export default About;