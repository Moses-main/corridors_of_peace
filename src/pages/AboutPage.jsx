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
              empowering women and girls in Africa (Nig) through education,
              economic opportunities, and social protection programs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 text-justify leading-relaxed">
              Our mission is to catalyze sustainable change across Africa,
              beginning in Nigeria, by centering women and girls. We provide the
              tools, resources, and platforms for them to lead, build, and
              transform their own lives and communities. Through female-powered
              initiatives and inclusive partnerships that engage men and boys, we
              foster a cycle of empowerment, healing, and lasting peace.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">Our Vision</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              We envision a thriving Africa, rooted in peace and dignity, where
              every woman and girl has the power to shape her own destiny. We see
              a continent where communities are resilient, environments are
              healthy, and the well-being of all is secured through the leadership
              of women and the solidarity of all genders.
            </p>
          </div>

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
                  250+
                </div>
                <p className="text-gray-700 font-medium">Women Empowered</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-700 font-medium">Active Projects</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-2">1</div>
                <p className="text-gray-700 font-medium">
                  Partner Organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
