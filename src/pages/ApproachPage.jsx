import { motion } from "framer-motion";

const ApproachPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 bg-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Approach
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            How we're building a better future for African women, girls, and
            communities
          </p>

          {/* Three Pillars */}
          <div className="max-w-3xl mx-auto bg-blue-50/30 p-8 rounded-xl border border-blue-100 mb-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
              We implement a holistic, three-pillar approach to women's
              empowerment, addressing the root causes of inequality and conflict
              by strategically linking peace, prosperity, and protection:
            </p>
            <ul className="space-y-6">
              {[
                {
                  title: "Building Corridors of Peace",
                  content:
                    "We empower women as mediators, community leaders, and agents of social cohesion. Through inclusive dialogue, trauma healing, and conflict resolution training, we enable them to create and sustain vital corridors of peace within and between communities, forming the bedrock for safe and stable societies.",
                },
                {
                  title: "Creating Economic Opportunities",
                  content:
                    "We unlock economic agency by providing access to skills training, seed capital, market linkages, and entrepreneurship support. By fostering women-led enterprises and inclusive value chains, we transform economic opportunities into engines for poverty reduction, family stability, and community development.",
                },
                {
                  title: "Fortifying with Social Protection",
                  content:
                    "We advocate for and provide access to essential social protection programs, including health services, legal aid, safety nets, and violence prevention systems. This safety layer ensures that women and girls have the security and support necessary to recover from crisis, participate fully in the economy, and lead in their communities without fear.",
                },
              ].map((pillar, index) => (
                <li key={index} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {pillar.content}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-700 leading-relaxed text-justify">
              These three pillars form the foundation of our work, implemented
              through targeted, gender-specific programs that address the unique
              needs of all community members while fostering collective healing
              and empowerment.
            </p>
          </div>
        </div>

        {/* Visual Connection */}
        <div className="relative mb-12">
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-100 to-transparent"></div>
          <div className="relative flex justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          </div>
        </div>

        {/* Gender-Specific Healing */}
        <section
          id="gender-healing"
          className="mb-16 p-8 border border-gray-100 rounded-lg bg-white hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
              1
            </span>
            Gender-Specific Healing and Empowerment Spaces
          </h2>
          <p className="text-gray-700 mb-6">
            Our three pillars come to life through gender-responsive programs
            that recognize the unique needs and strengths of all community
            members. We create safe spaces where healing and empowerment can
            flourish across all genders.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Women & Girls Empowerment Division",
                content:
                  "Leads our core mission, focusing exclusively on the empowerment, education, and leadership of women and girls.",
              },
              {
                title: "Male Healing and Engagement Division",
                content:
                  "Provides safe spaces for African men and boys, addressing unhealed trauma and fostering positive masculinity to build a cohort of allies for a more equitable society.",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 border-l-2 border-blue-600">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative mb-12 mt-16 text-center">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-lg font-medium text-gray-700">
              Our Strategic Objectives
            </span>
          </div>
        </div>

        {/* Primary Objectives */}
        <section
          id="primary-objectives"
          className="mb-16 p-8 border border-gray-100 rounded-lg bg-white hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
              2
            </span>
            Primary Objectives
          </h2>
          <p className="text-gray-700 mb-6">
            Building on our three pillars, these objectives drive our mission to
            position African women and girls as the central architects of their
            own and the continent's renewal. Each objective directly supports
            one or more of our core pillars.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Education Sovereignty",
                content:
                  "Scholarships, internships, and technology access primarily for girls and women.",
                icon: "•",
              },
              {
                title: "Health Justice",
                content:
                  "Women-run health services, menstrual equity, and comprehensive sexual and reproductive health services.",
                icon: "✓",
              },
              {
                title: "Eco-Leadership",
                content:
                  "Women as primary stewards of land, water, and wildlife guardianship.",
                icon: "✓",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-6 h-6 ${
                      item.icon === "•"
                        ? "text-blue-600"
                        : "bg-green-100 text-green-600 rounded-full"
                    } flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Objectives */}
        <section
          id="secondary-objectives"
          className="mb-16 p-8 border border-gray-100 rounded-lg bg-white hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
              3
            </span>
            Secondary Objectives
          </h2>
          <p className="text-gray-700 mb-6">
            These complementary objectives expand our impact, creating a
            supportive ecosystem where our primary objectives can thrive. They
            represent the diverse ways we operationalize our three pillars
            across different community needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Male Allyship & Healing: Cultivating programs for positive masculinity, trauma counseling, and engaging men as partners in peace and gender equality.",
              "Girl-Centered Innovation: Establishing STEM labs, eco-champion training, and career internships for girls.",
              "Arts & Music Liberation: Deploying therapy, cultural, and advocacy projects for community healing.",
              "Animal-Human Solidarity: Training women and vulnerable survivors as wildlife rangers and animal carers.",
              "African Crisis Response: Mobilizing women-led relief efforts, legal empowerment, and food security campaigns.",
              "Pan-African Research & Partnerships: Forging formal ties with private sector, universities, and NGOs across the continent.",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 text-blue-600 flex items-center justify-center">
                    {index + 1}.
                  </div>
                </div>
                <p className="ml-3 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Principles */}
        <section
          id="operational-principles"
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
              4
            </span>
            Operational Principles
          </h2>
          <p className="text-gray-700 mb-6">
            These principles guide how we implement our three pillars and
            objectives, ensuring our approach remains effective, inclusive, and
            true to our mission of empowering women and girls while engaging the
            entire community.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Three-Pillar Integration",
                content:
                  "Every program and initiative must demonstrate how it supports at least one of our three core pillars: Peace, Prosperity, and Protection, ensuring alignment with our fundamental mission.",
              },
              {
                title: "African-Led Leadership Quota",
                content:
                  "At least 70% of management and staff are women; at least 50% are from vulnerable groups within local communities.",
              },
              {
                title: "Strategic Resource Allocation",
                content:
                  "A minimum of 60% of the budget is directed to women-and-girl-focused programs; a minimum of 30% supports mixed-gender or male-engagement initiatives that benefit vulnerable populations and promote holistic community healing.",
              },
              {
                title: "Impact Tracking for Africa",
                content:
                  "Performance is measured using education, income/ownership, and leadership indices for women and girls, with complementary metrics on male participation in healing programs and their development as allies.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="p-6 border-b border-gray-100 last:border-0"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ApproachPage;
