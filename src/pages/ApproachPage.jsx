import { motion } from "framer-motion";

const ApproachPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 md:pt-24 pb-12 md:pb-16 bg-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Approach
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Integrated Development for Lasting Peace in Africa
          </p>

          {/* Three Pillars */}
          <div className="max-w-4xl mx-auto bg-blue-50/30 p-5 sm:p-6 md:p-8 rounded-xl border border-blue-100 mb-10 md:mb-12">
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed text-justify">
              We champion a holistic model for Africa's renewal, built on the
              belief that sustainable progress requires the full participation
              and healing of all community members. Our approach intertwines
              economic empowerment, social protection, and social cohesion with
              restorative justice, fostering resilient communities where
              everyone can thrive.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "1. Foundational Empowerment for All",
                  description:
                    "We build the essential infrastructure for individual and collective well-being, creating a just foundation for development.",
                  items: [
                    "Inclusive Economic & Social Development: We create access to education, technology, sustainable livelihoods, and robust social protection programs, with a targeted focus on empowering women and girls while actively engaging men as partners in economic equity.",
                    "Health Justice & Well-being: We advocate for community-led health systems, comprehensive sexual and reproductive care, and psychosocial support, recognizing health as a cornerstone of human dignity and productivity for all.",
                    "Environmental Stewardship & Climate Resilience: We empower communities—especially women—as primary stewards of natural resources, promoting practices that secure ecosystems and build resilience against climate change.",
                  ],
                },
                {
                  title: "2. Healing, Justice & Social Cohesion",
                  description:
                    "We address historical and personal trauma to mend the social fabric and build authentic peace.",
                  items: [
                    "Restorative Justice & Community Dialogue: We implement restorative circles and inclusive dialogue platforms that bring women, men, youth, and elders together to address grievances, resolve conflicts, and rebuild broken trust, strengthening communal bonds.",
                    "Gender-Responsive Healing Spaces: We facilitate safe spaces for women and girls to heal and lead, alongside dedicated programs for men and boys to address trauma, redefine masculinity, and become committed allies in gender equality.",
                    "Arts, Culture & Collective Memory: We deploy arts, music, and storytelling as powerful tools for therapy, cultural preservation, and forging a shared identity that transcends division.",
                  ],
                },
                {
                  title:
                    "3. Leadership, Innovation & Institutional Development",
                  description:
                    "We cultivate the next generation of leaders and build strong systems for sustained impact.",
                  items: [
                    "Inclusive Leadership Development: We invest in leadership and entrepreneurial training for women and girls, coupled with programs that prepare men as equitable leaders in their homes and communities, ensuring diverse voices guide development.",
                    "Youth & Innovation Ecosystems: We establish innovation hubs, STEM access, and career pathways—particularly for girls—while creating platforms where young men and women collaboratively solve local challenges.",
                    "Pan-African Partnerships & Research: We forge strategic alliances across sectors and borders to share knowledge, scale solutions, and advocate for policies that support equitable and inclusive development.",
                  ],
                },
              ].map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{section.description}</p>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700 text-justify">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Our Commitments to Equitable Implementation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-justify">
                    <strong>African-Led & Representative Governance:</strong>{" "}
                    Our leadership, staff, and decision-making bodies are
                    predominantly composed of African women, with strong
                    representation from marginalized groups and the meaningful
                    inclusion of male allies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-justify">
                    <strong>Strategic, Inclusive Investment:</strong> The
                    majority of our resources directly empower women and girls,
                    with significant allocation to mixed-gender initiatives that
                    foster social cohesion, male allyship, and holistic
                    community development.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-justify">
                    <strong>Impact Measured by Holistic Progress:</strong> We
                    track success through the advancement of women and girls in
                    education, health, and leadership, alongside critical
                    metrics on social cohesion, restorative justice outcomes,
                    community resilience, and the active participation of all
                    genders in building a shared future.
                  </span>
                </li>
              </ul>
            </div>
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
        {/* <section
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
        </section> */}

        {/* Section Divider */}
        {/* <div className="relative mb-12 mt-16 text-center">
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
        </div> */}

        {/* Primary Objectives */}
        {/* <section
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
        </section> */}

        {/* Secondary Objectives */}
        {/* <section
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
        </section> */}

        {/* Operational Principles */}
        {/* <section
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
        </section> */}
      </div>
    </motion.div>
  );
};

export default ApproachPage;
