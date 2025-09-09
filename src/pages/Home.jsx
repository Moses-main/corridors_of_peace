import { motion } from "framer-motion";

// Components
import Hero from "../components/Hero";
import About from "../components/About";
import Universal_Causes from "../components/Universal_Causes";
import Donate from "../components/Donate";
import Organization from "../components/Organization";
import Contact from "../components/Contact";

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
        <Universal_Causes />
        <Donate />
        <Organization />
        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
