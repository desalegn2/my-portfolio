import React from 'react';

const About = () => {
  return (
    <div name ="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Gift Egwuenu is a Developer Advocate at Cloudflare. With over 5 years of experience in web development and building tools to help businesses grow. In her previous role, she was a front-end developer. She is now working in developer advocacy.

Gift shares her experience in web development, Jamstack, career-related topics, and developer lifestyle videos with people seeking guidance in the tech industry.

It's her pleasure to have been named a Cloudinary Media Developer Expert, Microsoft MVP, Auth0 Ambassador, GitHub Star, Polynuat Advisor, and Nuxt.js Ambassador.

She spends her free time reading, cooking, and going on travel adventures whenever she is not making content or writing code.</p>
             <br></br>
             <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolorem, fugiat 
                quas optio rerum autem aliquid in dignissimos est ipsum voluptate sit aliquam,
                 quaerat praesentium veritatis eius cupiditate pariatur voluptas!
                 </p>
      </div>
    </div>
  );
}

export default About;
