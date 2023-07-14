import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import photoOne from "../photo/IMG_29.jpg";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h6 className='text-2xl sm:text-7xl font-bold text-white'> I,am Software Engineering Student</h6>
         
                <div>
                    <Link 
                    to="project" 
                    smooth
                    duration={500}
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Project
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={30} className="ml-1"/>
                        </span>
                    </Link>
                </div>
        </div>
        <div>
        <img src={photoOne} alt="no_image" style={{ maxWidth: '50%', height: 'auto' }} className="rounded-2xl mx-auto" />

        </div>
     </div>
    </div>
  );
}

export default Home;
