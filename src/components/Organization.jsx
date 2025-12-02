import { motion } from "framer-motion";

const Organization = () => {
  const stats = [
    { id: 1, name: "Women Empowered", value: "500+" },
    { id: 2, name: "Communities Served", value: "25+" },
    { id: 3, name: "Programs Running", value: "10+" },
    { id: 4, name: "Years of Service", value: "5+" },
  ];

  const partners = [
    {
      name: "ASHNA",
      logo: "/images/partners/ASHNA_logo.jpeg",
      description: "Action for Social and Human Needs in Africa",
    },

    {
      name: "Rotary Foundation",
      logo: "/images/partners/rotarylogo.jpg",
      description: "Rotary Foundation",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference in Africa (Nig)
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our organization is dedicated to empowering women and girls
              through education, economic opportunities, and social protection.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="flex flex-col items-center"
              >
                <dt className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-base text-gray-700">{stat.name}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Partners Section */}
        {/* <div className="mt-24">
          <div className="mt-16">
            <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
              Top Partnering Organizations
            </h3>
            <div className="flex flex-wrap justify-center gap-6 px-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-2xl h-32 overflow-hidden border border-gray-100"
                >
                  <div className="h-full w-32 flex-shrink-0 bg-gray-50 flex items-center justify-center p-4 border-r border-gray-100">
                    <img
                      className="h-16 w-auto max-w-full object-contain"
                      src={partner.logo}
                      alt={partner.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder-logo.png';
                      }}
                    />
                  </div>
                  <div className="p-4 flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{partner.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Top Partnering Organizations
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto sm:flex-1 sm:max-w-xs h-32 overflow-hidden border border-gray-100"
              >
                <div className="h-full w-32 sm:w-28 flex-shrink-0 bg-gray-50 flex items-center justify-center p-3 sm:p-2 border-r border-gray-100">
                  <img
                    className="h-20 sm:h-16 w-auto max-w-full object-contain"
                    src={partner.logo}
                    alt={partner.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder-logo.png";
                    }}
                  />
                </div>
                <div className="p-3 sm:p-2 flex-1 min-w-0">
                  <h3 className="text-base sm:text-sm font-semibold text-gray-900 truncate">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 text-center text-gray-900 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Join Our Mission</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-700">
            Be part of our journey to create lasting change for women and girls
            in Africa (Nig).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="block w-full rounded-lg bg-gray-900 px-8 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#d1fae5] sm:w-auto"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="block w-full rounded-lg border-2 border-gray-900 px-8 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#d1fae5] sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
