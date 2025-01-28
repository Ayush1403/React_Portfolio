import React from 'react';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Education = () => {
  const educationn = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'Chandigarh University',
      date: '2021 - 2025',
     
     
    },
    {
      degree: 'Intermidiate',
      school: 'Loyola International School',
      date: '2019 - 2021',
      coursework: 'Physics,Chemistry,Maths',
    
    },
    {
      degree: 'High School',
      school: 'Lucknow Public School',
      date: '2017 - 2019',
      coursework: 'Central Board of Secondary Education  ',
    
    }
  ];

  const skills = [
    { 
      image: 'https://img.icons8.com/color/48/000000/javascript.png',
      name: 'JavaScript', 
      proficiency: 90 
    },
    { 
      image: 'https://img.icons8.com/color/48/000000/react-native.png',
      name: 'React',
      proficiency: 85 },
    { 
      image: 'https://img.icons8.com/color/48/000000/nodejs.png',
      name: 'Node.js',
       proficiency: 80 },
    { 
      image: 'https://img.icons8.com/color/48/000000/css3.png',
      name: 'CSS', proficiency: 75 },
    { image: 'https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000',
       name: 'Tailwind CSS', 
       proficiency: 70 },
    { 
      image: 'https://img.icons8.com/color/48/000000/git.png',
      name: 'Git', 
      proficiency: 85 },
    { 
      image: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
      name: 'HTML', 
      proficiency: 95 },
  ];

  // Duplicate the skills array to ensure seamless looping
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="min-h-screen hover-target flex flex-col sm:flex-col items-center justify-center text-white">
      <div className="text-center h-1/2 w-full">
        <h1 className="text-4xl font-bold mb-8">Education</h1>
        <div className="grid sm:grid-cols-1 bg-opacity-10 lg:grid-cols-3 group gap-8 px-4">
          {educationn.map((education, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg group-hover:blur-sm duration-700 hover:!blur-none shadow-lg border border-gray-500 border-opacity-50">
              <h2 className="text-3xl font-bold mb-2">{education.degree}</h2>
              <h3 className="text-xl mb-2">{education.school}</h3>
              <p className="mb-2">{education.date}</p>
              <p className="mb-2">{education.coursework}</p>
              <p>{education.certifications}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1/2  my-8"></div>
      <div className='w-full py-10 text-center'>
        <h1 className="text-4xl font-bold mb-20">Skills</h1>
        <div className="  bg-gray-700 bg-opacity-10 bg-blur-lg 
                    shadow-2xl  ">
          <motion.div
            className="flex"
            animate={{
              x: ['-100%', '0%'],
              transition: {
                ease: 'linear',
                duration: 10,
                repeat: Infinity,
              }
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `${100 / skills.length}%` }}>
                <div className="flex flex-col items-center justify-center h-full text-6xl">
                  <img src={skill.image} alt={skill.name} className="sm:w-12 md:w-24 md:h-24 sm:h-12 mt-4 mb-4" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;