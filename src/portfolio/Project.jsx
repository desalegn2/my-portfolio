import React from 'react';
import bloodBank from "../photo/bbms.png";
const Project = () => {
  const projects = [
    {
      id: 1,
      src: bloodBank,
    },

  ];
  return (
    <div name="project"
      className='bg-gradient-to-b from-black to-gray-800 w-full p-4 text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx:auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
          <p className='py-6'>Check Out Some Of My Work Here</p>
        </div >
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:grid'>
          {
            projects.map(({ id, src }) => (
              <div key={id} className='shadow-md shadow-gray-500 rounded-lg '>
                <img
                  src={src}
                  alt='' className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Blood Bank Management system</button>
                  <a href="https://github.com/desalegn2/Blood-Management-System">
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
