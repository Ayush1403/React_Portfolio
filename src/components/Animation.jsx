import React from 'react';
import image from '../assets/download.png';
import Typed from 'typed.js';

const Animation = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'UX Designer', 'Backend Developer', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 10,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-8">
      <div className="md:w-1/2 flex flex-col justify-around items-center sm:w-full p-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Hi, I'm Ayush</h1>
        <p className="text-xl sm:text-2xl md:text-3xl w-full mb-6">
          A passionate <span className='text-[#6C63FF]' ref={el}></span> <br />
          crafting beautiful and functional web experiences.
        </p>
        <a href="/contact" className="bg-[#6C63FF] text-white w-40 px-4 py-2 rounded-lg">
          View My Work
        </a>
      </div>
      <div className='md:w-1/2 sm:w-0 flex justify-center items-center'>
        {/* Hide image when width is <= 632px */}
        <img 
          src={image} 
          className='rounded-full w-3/4 md:w-2/3 lg:w-[80%] shadow-amber-950 hidden md:block sm:hidden xl:block' 
          alt="Ayush" 
        />
      </div>
    </section>
  );
};

export default Animation;
