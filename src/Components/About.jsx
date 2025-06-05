import { div } from 'motion/react-client';
import React from 'react';

function About() {
  return (
    <div className='bg-[#222222] mt-10 mx-4 md:mx-10 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center md:items-start h-auto md:h-[500px] relative overflow-hidden'>

    <section className=" text-white py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left side image or animation */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
          <span className="text-gray-400 text-center rounded-md">
            <img className='rounded-xl'
            src='https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417391.jpg?semt=ais_items_boosted&w=740'
            />
          </span>
        </div>
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 max-w-lg">
        <h2 className="text-4xl font-bold mb-4">About <span className='text-[#8245ec]'>Me</span> </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
         I am a passionate full-stack developer skilled in building responsive web applications using modern technologies
         . I love solving real-world problems with clean code, constantly 
         learning, and crafting digital experiences that are fast, functional, and user-friendly.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>💻 Frontend Developer (React,Vue,Tailwind, Framer Motion)</li>
          <li>🛠️ Backend Experience with Laravel & MySql</li>
          <li>🚀 Love for UI/UX and smooth user experience</li>
        </ul>
      </div>
    </section>
    </div>
  );
}

export default About;
