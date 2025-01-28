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

  const duplicatedSkills = [...skills, ...skills];

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
        <div className="hidden sm:grid sm:grid-cols-1 group lg:grid-cols-3 gap-8 px-4">
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

          {/* Navigation buttons */}
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

          {/* Dots indicator */}
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

      {/* Skills section */}
      <div className="w-full py-10 text-center mt-16">
        <h1 className="text-4xl font-bold mb-20">Skills</h1>
        <div className="bg-gray-700 bg-opacity-10 backdrop-blur-lg shadow-2xl overflow-hidden">
          <div
            className="flex animate-scroll"
            style={{
              animation: 'scroll 20s linear infinite',
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8"
                style={{ width: `${100 / skills.length}%` }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="sm:w-12 md:w-24 md:h-24 sm:h-12 mt-4 mb-4"
                  />
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;