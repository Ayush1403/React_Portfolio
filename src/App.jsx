import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Animation from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Footer';
import background from './assets/bavkground.png'
import CustomCursor from './components/CustomCursor';
import SectionWrapper from './components/SectionWrapper';

import './index.css';



const sectionVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: delay, 
    },
  },
});

function App() {

const backgroundImage = {
  backgroundImage: `url(${background})`,
    backgroundSize: 'cover',     
    backgroundPosition: 'center',  
    height: '100vh',  
}

  return (
    <div className="h-screen  hover-target overflow-hidden relative" style={backgroundImage}>
       <CustomCursor />
      <Navbar />
      <main className="h-[calc(100vh-64px)] overflow-y-auto snap-y snap-mandatory">
        <SectionWrapper id="About">
          <motion.div
            variants={sectionVariants(0.2)} // Delay of 0.2 seconds for the first section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Animation />
          </motion.div>
        </SectionWrapper>
        <SectionWrapper id="Education">
          <motion.div
            variants={sectionVariants(0.4)} // Delay of 0.4 seconds for the second section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Education />
          </motion.div>
        </SectionWrapper>
        <SectionWrapper id="Projects">
          <motion.div
            variants={sectionVariants(0.6)} // Delay of 0.6 seconds for the third section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Projects />
          </motion.div>
        </SectionWrapper>
        <SectionWrapper id="Contact">
          <motion.div
            variants={sectionVariants(0.8)} // Delay of 0.8 seconds for the fourth section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </SectionWrapper>
      </main>
    </div>
  );
}

export default App;
