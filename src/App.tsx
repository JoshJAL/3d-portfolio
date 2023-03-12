import { BrowserRouter } from 'react-router-dom';
import About from './components/about/About';
import Stars from './components/canvas/Stars';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Feedbacks from './components/feedbacks/Feedbacks';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Tech from './components/tech/Tech';

export default function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
}
