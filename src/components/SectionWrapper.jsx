import React from 'react';

const SectionWrapper = ({ children, id }) => {

  const Hoverable = ({ children }) => {
    const handleMouseEnter = () => document.body.classList.add('cursor-hovered');
    const handleMouseLeave = () => document.body.classList.remove('cursor-hovered');
 
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    );
  };
    return (
   <Hoverable>
      <section 
      id={id} 
      className="min-h-screen w-full snap-start flex flex-col relative bg-gray-800"
    >
      {children}
    </section>
    </Hoverable>
  );
};

export default SectionWrapper;