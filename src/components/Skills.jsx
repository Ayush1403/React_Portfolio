import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'Tailwind CSS',
    'Git',
    'HTML',
    'Python'
  ];

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-xl">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;