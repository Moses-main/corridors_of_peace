const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Corridors of Peace
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              To impact positively on all aspects of human lives, advance
              universal well-being - human, animal and environmental - through
              female-powered solutions that prioritize girls, women and all
              marginalized groups as Nigeria's transformative core.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to empower women and girls in Guereda by providing
              them with the tools, resources, and support they need to build
              better futures for themselves and their communities.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">
                Our Vision
              </h4>
              <p className="text-gray-700">
                A Nigeria where women and girls drive planetary healing,
                restoring dignity to all life and eradicating vulnerability
                through radical inclusion
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
  );
};

export default About;
