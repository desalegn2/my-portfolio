import React from 'react';

const Contact = () => {
    return (
        <div
            name="conact"
            className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
                    <p className='py-6'>I AM AT YOUR SERVICE</p>
                </div>
                <div className=''>
                <p className='text-2xl font-bold inline border-b-4 border-gray-500'>Call Us On</p>
                    <p className='py-6'>+251949496106</p> 
                    <p className='text-2xl font-bold inline border-b-4 border-gray-500'>Email</p>
                    <p className='py-6'>desalegnaw@gmail.com</p>
                    <p className='text-2xl font-bold inline border-b-4 border-gray-500'>Address</p>
                    <p className='py-6'>Addis Abeba</p> 
                </div>
            </div>
        </div>
    );
}

export default Contact;
