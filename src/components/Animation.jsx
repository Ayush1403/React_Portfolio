import React from 'react';
import image from '../assets/download.png'
import Typed from 'typed.js'
import { NavLink } from 'react-router-dom';

const Animation = () => {

  const el = React.useRef(null);


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'UX Desiginer', 'Backend Developer', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 10,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-screen flex items-center justify-center  bg-gray-900">
      <div className="md:w-1/2 flex flex-col justify-around items-center  sm:w-full p-10">
      <h1 className="text-7xl w-[70%] font-bold mb-4">Hi, I'm Ayush</h1>
      <p className="text-4xl w-[70%] mb-6">A passionate <span className='text-[#6C63FF]' ref={el} ></span> <br />crafting beautiful and functional web experiences.</p>
      <button to='/contact' className="bg-[#6C63FF] align-middle text-white w-40  px-2 py-2 rounded-lg">View My Work</button>
      
      </div>
      <div className='md:w-1/2 sm:w-0  flex justify-center items-baseline'>
        <img src={image} className='rounded-full w-[80%] shadow-amber-950' alt="" />
      </div>
    </section>
  );
};

export default Animation;