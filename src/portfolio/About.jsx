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
    I am a recent graduate with a degree in Software Engineering and I'm currently applying my technical 
skills in a practical setting as a Junior Enterprise Network Deployment Engineer at IE Network Solutions Plc. 
This role allows me to leverage my understanding of software systems while gaining valuable experience in network 
design, implementation, and deployment.

I'm passionate about technology and enjoy working in a fast-paced environment
 where I can learn and contribute to real-world projects.
       </p>
           
      </div>
    </div>
  );
}

export default About;
