import React, { useState, useEffect } from 'react';
import sanskriti from '../assets/sanskriti.png'
import tripon from '../assets/tripon.webp'
import makan from '../assets/image.png'
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const projects = [
    { 
      image: sanskriti,
      id: 1,
      title: "Sanskriti",
      description: `Designed a microservices architecture to enhance scalability and modularity, ensuring seamless
integration between various components. Developed efficient backend solutions using Node.js and
MongoDB to optimize database interactions and improve overall performance. Additionally, built reusable
React components, significantly reducing development time by 40% and promoting consistency across the
platform.`,
      repoLink: "https://github.com/Ayush1403/sanskriti",
      websiteLink: "https://sanskrit-omega.vercel.app/"
    },
    { 
      image: tripon,
      id: 2, 
      title: "Tripon", 
      description: `Designed and developed an interactive user interface for a tour planning and hotel booking platform using
React.js and Tailwind CSS, ensuring a seamless and responsive user experience.Integrated Framer to
enhance visual animations and JWT auth for secure and efficient authentication.Implemented key features
like itinerary creation and budget-conscious hotel booking with price comparison options. Overcame
challenges in API integration to enable smooth data retrieval for user convenience.`,
      repoLink: "https://github.com/Ayush1403/Tripon",
      websiteLink: "https://github.com/Ayush1403/Tripon"
    },
    { 
      image: makan,
      id: 3, 
      title: "Makaan", 
      description: `Built a feature-rich real estate platform using HTML and CSS for a clean and responsive front-end design.
Developed server-side logic with Node.js and managed property data using MongoDB and Mongoose.
Implemented efficient property search functionality and data management features, ensuring smooth
navigation and scalability for users. Focused on optimizing the backend to handle property listings and user
accounts effectively.`,
      repoLink: "https://github.com/Ayush1403/Makaan",
      websiteLink: "https://makaan-gray.vercel.app/"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, projects.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen py-20">
      <div 
        className="relative w-full h-[900px] bg-gray-900 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-gray-700 bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-4 backdrop-blur-lg transition-all border border-gray-500 border-opacity-50"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-gray-700 bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-4 backdrop-blur-lg transition-all border border-gray-500 border-opacity-50"
        >
          →
        </button>

        {/* Title */}
        <h1 className="text-center pt-8 text-4xl font-bold text-white">
          Projects
        </h1>

        {/* Cards container */}
        <div className="relative h-[600px] flex items-center justify-center mt-16">
          {projects.map((project, index) => {
            const position = (index - activeIndex + projects.length) % projects.length;
            const rotation = -30 + (position * 15);
            const xOffset = position * 40;
            const yOffset = Math.abs(position - 2) * 10;
            const zIndex = projects.length - Math.abs(position - 2);
            const isTopCard = zIndex === projects.length;
            
            return (
              <div
                key={project.id}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  transform: `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
                  zIndex,
                }}
              >
                <div 
                  className={`
                    bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-xl 
                    shadow-2xl border border-gray-500 border-opacity-50
                    transition-all duration-700 overflow-hidden
                    ${isTopCard ? '' : 'blur-sm opacity-70'}
                    hover:blur-none hover:opacity-100
                    lg:w-[900px] w-96 lg:h-[400px] h-[500px]
                  `}
                >
                  <div className="h-full w-full flex flex-col lg:flex-row">
                    {/* Left side - Image (always on left for lg screens) */}
                    <div className="lg:w-1/2 h-full">
                      <img 
                        className="w-full h-full object-cover" 
                        src={project.image} 
                        alt={project.title} 
                      />
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                        <p className="text-gray-300 hidden lg:block mb-6">{project.description}</p>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-center"
                        >
                          View Repository
                        </a>
                        <a 
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-center"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? 'bg-white w-4' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;