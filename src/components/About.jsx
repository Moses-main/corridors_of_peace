import LeadershipTeam from './LeadershipTeam';
import Gallery from './Gallery';

const About = () => {
  return (
    <>
      <section className="py-16 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Corridors of Peace
            </h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                Our mission is to create sustainable change by providing women and
                girls with the tools, resources, and support they need to build
                better futures for themselves and their communities.
              </p>
              <p className="text-gray-600 mb-6">
                Through education, skills development, and community engagement,
                we empower individuals to break the cycle of poverty and create
                lasting positive change in their lives and communities.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-blue-800 mb-2">
                  Our Vision
                </h4>
                <p className="text-gray-700">
                  We envision a world where every woman and girl in Nigeria has
                  the opportunity to live with dignity, free from poverty and
                  discrimination, and where communities thrive through sustainable
                  development and peace-building initiatives.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">100+</div>
                <p className="text-gray-700">Women Empowered</p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg">
                <div className="text-yellow-600 text-4xl font-bold mb-2">5+</div>
                <p className="text-gray-700">Active Projects</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <div className="text-green-600 text-4xl font-bold mb-2">3+</div>
                <p className="text-gray-700">Partner Organizations</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <div className="text-purple-600 text-4xl font-bold mb-2">
                  1000+
                </div>
                <p className="text-gray-700">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadershipTeam />
      <Gallery />
    </>
  );
};

export default About;
