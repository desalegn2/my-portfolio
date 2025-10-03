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
            Motivated and detail-oriented Enterprise Network
            Deployment Engineer at IE Network Solutions, with
hands-on experience in deploying and configuring
network infrastructure. Skilled in installing and
integrating enterprise networking solutions,
including switches, routers, firewalls, and wireless
systems. Familiar with AV and collaboration
technologies, including smart room integrations.
Eager to expand technical expertise in network
design, implementation, and troubleshooting.
Passionate about continuous learning and
professional growth in enterprise networking.

       </p>
           
      </div>
    </div>
  );
}

export default About;
