import Navbar from './components/Navbar';
import Animation from './components/Animation';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SectionWrapper from './components/SectionWrapper';

import './index.css';

function App() {
  return (
    <div className="h-screen overflow-hidden relative">
      <Navbar />
      <main className="h-[calc(100vh-64px)] overflow-y-auto snap-y snap-mandatory">
        <SectionWrapper id="Animation">
          <Animation />
        </SectionWrapper>
        <SectionWrapper id="Education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="Projects">
          <Projects />
        </SectionWrapper>
       
        <SectionWrapper id="Contact">
          <Contact />
        </SectionWrapper>
      </main>
    </div>
  );
}

export default App;