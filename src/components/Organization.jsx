import { motion } from "framer-motion";

const Organization = () => {
  const stats = [
    { id: 1, name: "Women Empowered", value: "500+" },
    { id: 2, name: "Communities Served", value: "25+" },
    { id: 3, name: "Programs Running", value: "10+" },
    { id: 4, name: "Years of Service", value: "5+" },
  ];

  const partners = [
    { name: "UN Women", logo: "/images/un-women-logo.png" },
    { name: "Global Fund", logo: "/images/global-fund-logo.png" },
    { name: "African Union", logo: "/images/african-union-logo.png" },
    { name: "Local NGOs", logo: "/images/ngos-logo.png" },
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
        <div className="mt-24">
          <h3 className="text-center text-lg font-semibold text-gray-900">
            Trusted by leading organizations
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-span-1 flex justify-center"
              >
                <div className="h-16 w-full flex items-center justify-center bg-gray p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    className="max-h-12 max-w-[120px] object-contain"
                    src={partner.logo}
                    alt={partner.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/120x48?text=" +
                        encodeURIComponent(partner.name);
                    }}
                  />
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
