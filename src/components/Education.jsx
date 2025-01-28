import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Education = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const educationn = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'Chandigarh University',
      date: '2021 - 2025',
    },
    {
      degree: 'Intermediate',
      school: 'Loyola International School',
      date: '2019 - 2021',
      coursework: 'Physics, Chemistry, Maths',
    },
    {
      degree: 'High School',
      school: 'Lucknow Public School',
      date: '2017 - 2019',
      coursework: 'Central Board of Secondary Education',
    },
  ];

  const skills = [
    {
      image: 'https://img.icons8.com/color/48/000000/javascript.png',
      name: 'JavaScript',
      proficiency: 90,
    },
    {
      image: 'https://img.icons8.com/color/48/000000/react-native.png',
      name: 'React',
      proficiency: 85,
    },
    {
      image: 'https://img.icons8.com/color/48/000000/nodejs.png',
      name: 'Node.js',
      proficiency: 80,
    },
    {
      image: 'https://img.icons8.com/color/48/000000/css3.png',
      name: 'CSS',
      proficiency: 75,
    },
    {
      image: 'https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000',
      name: 'Tailwind CSS',
      proficiency: 70,
    },
    {
      image: 'https://img.icons8.com/color/48/000000/git.png',
      name: 'Git',
      proficiency: 85,
    },
    {
      image: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
      name: 'HTML',
      proficiency: 95,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % educationn.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + educationn.length) % educationn.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold mb-8">Education</h1>
        
        {/* Desktop view */}
        <div className="hidden group hover-target sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {educationn.map((education, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-30 backdrop-blur-lg p-6 rounded-lg group-hover:blur-sm hover:!blur-none shadow-lg border border-gray-500 border-opacity-50"
            >
              <h2 className="text-3xl font-bold mb-2">{education.degree}</h2>
              <h3 className="text-xl mb-2">{education.school}</h3>
              <p className="mb-2">{education.date}</p>
              {education.coursework && (
                <p className="mb-2">{education.coursework}</p>
              )}
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden relative px-4">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {educationn.map((education, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-gray-700 bg-opacity-30 backdrop-blur-lg p-6 shadow-lg border border-gray-500 border-opacity-50"
                >
                  <h2 className="text-3xl font-bold mb-2">{education.degree}</h2>
                  <h3 className="text-xl mb-2">{education.school}</h3>
                  <p className="mb-2">{education.date}</p>
                  {education.coursework && (
                    <p className="mb-2">{education.coursework}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {educationn.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

     
      <div className="w-full  flex-col text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
     
          <div className="flex justify-center items-center">
          {skills.map((skill,index)=>(
            <div  key={index}
            className=" flex hover-target  w-26 bg-white/20 bg-opacity-50 backdrop-blur-lg  h-26 flex-col p-4 justify-center items-center m-4 rounded-lg shadow-md">
              <img src={skill.image} alt="" />
            
            </div>
          ))}
          </div>
        </div>
      

    
    </section>
  );
};

export default Education;
