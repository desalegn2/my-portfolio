import React from 'react';

const About = () => {
  return (
    <div name ="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        I am a software engineering student at BIT, graduating in 2023. I am skilled in JavaScript, ReactJS, HTML, CSS, Laravel, and Django. I am passionate about building web applications and have a strong understanding of the full software development lifecycle
       </p>
           
      </div>
    </div>
  );
}

export default About;
