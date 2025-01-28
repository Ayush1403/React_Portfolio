import React from 'react';
import image from '../assets/hero.svg';
import Typed from 'typed.js';
import background from '../assets/new.svg'
const About = () => {
  const el = React.useRef(null);
  const backgroundImage = {
    backgroundImage: `url(${background})`,
      backgroundSize: 'cover',     
      backgroundPosition: 'center',  
      height: '100vh',  
  }
  
  const Hoverable = ({ children }) => {
    const handleMouseEnter = () => document.body.classList.add('cursor-hovered');
    const handleMouseLeave = () => document.body.classList.remove('cursor-hovered');
 
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    );
  };
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
  
    <section style={backgroundImage} className="h-screen flex hover-target items-center justify-center  px-4 sm:px-8">
      <div className="md:w-1/2  flex text-start flex-col justify-around items-center sm:w-full p-10 sm:text-left">
        <h1 className="text-3xl w-3/4 text-start sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Hi, I'm Ayush</h1>
        <p className="text-xl w-3/4 sm:text-2xl md:text-3xl space-x-5 mb-6">
          A passionate <span className='text-[#6C63FF] text-3xl  font-bold' ref={el}></span> <br />
          crafting beautiful and functional web experiences.
  
          With a focus on user-centric design and modern web technologies, I aim to build immersive experiences that seamlessly blend functionality and aesthetics.
       
        </p>
        <a href="#Projects">
        <button className='group ml-14 w-full h-12 items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381]  bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_51_129)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px]   [box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px]'>
        View my work
      </button>
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

export default About;
