import { motion } from "framer-motion";
import LeadershipTeam from "../components/LeadershipTeam";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
          <p className="text-xl leading-8">
            Corridors of Peace is a non-profit organization dedicated to
            empowering women and girls in Nigeria through education, economic
            opportunities, and social protection programs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">
            Our Mission
          </h2>
          <p>
            Our mission is to create sustainable change by providing women and
            girls with the tools, resources, and support they need to build
            better futures for themselves and their communities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Vision</h2>
          <p>
            We envision a world where every woman and girl in Nigeria has the
            opportunity to live with dignity, free from poverty and
            discrimination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            Our Approach
          </h2>
          <p>
            We take a holistic approach to women's empowerment, addressing the
            root causes of gender inequality through education, economic
            empowerment, and community engagement.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">100+</div>
                <p className="text-gray-600">Women Empowered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">5+</div>
                <p className="text-gray-600">Active Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">3+</div>
                <p className="text-gray-600">Partner Organizations</p>
              </div>
            </div>
          </div>

          <LeadershipTeam />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
