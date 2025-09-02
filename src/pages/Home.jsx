import { motion } from 'framer-motion';

// Components
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Donate from '../components/Donate';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Donate />
        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
