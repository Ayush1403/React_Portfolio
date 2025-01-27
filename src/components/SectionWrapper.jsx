import React from 'react';

const SectionWrapper = ({ children, id }) => {
  return (
    <section 
      id={id} 
      className="min-h-screen w-full snap-start flex flex-col relative bg-gray-800"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;