import { motion } from "framer-motion";
import LeadershipTeam from "../components/LeadershipTeam";
import LeadershipProfiles from "../components/LeadershipProfiles";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      {/* Hero Section */}
      <div className="flex-grow flex  items-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl mt-10 font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              About Us
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Corridors of Peace is a non-profit organization dedicated to
              empowering women and girls in Nigeria through education, economic
              opportunities, and social protection programs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
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
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gray-50 py-16">
        <LeadershipProfiles />
      </div>

      {/* Impact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <p className="text-gray-700 font-medium">Women Empowered</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
                <p className="text-gray-700 font-medium">Active Projects</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-2">3+</div>
                <p className="text-gray-700 font-medium">
                  Partner Organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadershipTeam />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
