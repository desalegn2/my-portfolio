import React from 'react';
import cssimage from "../photo/css.jpeg";
import githubImage from "../photo/github.jpeg";
import htmlImage from "../photo/html.jpeg";
import jsImage from "../photo/javascript.jpeg";
import laravelImage from "../photo/laravel.jpeg";
import reactImage from "../photo/reactImage.jpeg";
import tailwindImage from "../photo/tailwind.jpeg";
const Expriance = () => {
    const techs = [
        {
            id: 1,
            src: cssimage,
            title: "CSS",
            style: "shadow-blue-500"
        },
        
        {
            id: 2,
            src: githubImage,
            title: "GitHub",
            style: "shadow-gray-400"
        },
        {
            id: 3,
            src: htmlImage,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 4,
            src: jsImage,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 5,
            src: laravelImage,
            title: "Laravel",
        },
        {
            id: 6,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 7,
            src: tailwindImage,
            title: "TailWind",
            style: "shadow-sky-400"
        },
    ]
    return (
        <div name="expriance"
            className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full justify-center text-white '>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Expriance</p>
                    <p className='py-6'>These are the Technology that I've Worked With</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, title, src, style, }) => (

                            <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'}>
                                <img
                                    src={src}
                                    alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Expriance;
