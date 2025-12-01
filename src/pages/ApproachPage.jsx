import { motion } from "framer-motion";

const ApproachPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 bg-gray-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Approach
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            How we're building a better future for African women, girls, and communities
          </p>
        </div>

        {/* Gender-Specific Healing */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</span>
            Gender-Specific Healing and Empowerment Spaces
          </h2>
          <p className="text-gray-700 mb-6">
            Recognizing that Africa's renewal requires addressing the specific needs of all its people, 
            COPIN fosters interconnected, gender-responsive spaces.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-blue-800 mb-3">Women & Girls Empowerment Division</h3>
              <p className="text-gray-700">
                Leads our core mission, focusing exclusively on the empowerment, education, and leadership of women and girls.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-lg text-purple-800 mb-3">Male Healing and Engagement Division</h3>
              <p className="text-gray-700">
                Provides safe spaces for African men and boys, addressing unhealed trauma and fostering positive masculinity 
                to build a cohort of allies for a more equitable society.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Objectives */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">2</span>
            Primary Objectives
          </h2>
          <p className="text-gray-700 mb-6">
            COPIN's primary objectives are to position African women and girls, starting from Nigeria, as the central architects of their own and the continent's renewal.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">Education Sovereignty</h3>
                <p className="text-gray-600">Scholarships, internships, and technology access primarily for girls and women.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">Health Justice</h3>
                <p className="text-gray-600">Women-run health services, menstrual equity, and comprehensive sexual and reproductive health services.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">Eco-Leadership</h3>
                <p className="text-gray-600">Women as primary stewards of land, water, and wildlife guardianship.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Objectives */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">3</span>
            Secondary Objectives
          </h2>
          <p className="text-gray-700 mb-6">
            Our secondary objectives create the supportive ecosystem necessary for our primary mission to flourish.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Male Allyship & Healing: Cultivating programs for positive masculinity, trauma counseling, and engaging men as partners in peace and gender equality.",
              "Girl-Centered Innovation: Establishing STEM labs, eco-champion training, and career internships for girls.",
              "Arts & Music Liberation: Deploying therapy, cultural, and advocacy projects for community healing.",
              "Animal-Human Solidarity: Training women and vulnerable survivors as wildlife rangers and animal carers.",
              "African Crisis Response: Mobilizing women-led relief efforts, legal empowerment, and food security campaigns.",
              "Pan-African Research & Partnerships: Forging formal ties with private sector, universities, and NGOs across the continent."
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">{index + 1}</span>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Principles */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3">4</span>
            Operational Principles
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-purple-700 mb-3">African-Led Leadership Quota</h3>
              <p className="text-gray-700">
                At least 70% of management and staff are women; at least 50% are from vulnerable groups within local communities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-purple-700 mb-3">Strategic Resource Allocation</h3>
              <p className="text-gray-700">
                A minimum of 60% of the budget is directed to women-and-girl-focused programs; a minimum of 30% supports mixed-gender or male-engagement initiatives that benefit vulnerable populations and promote holistic community healing.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-purple-700 mb-3">Impact Tracking for Africa</h3>
              <p className="text-gray-700">
                Performance is measured using education, income/ownership, and leadership indices for women and girls, with complementary metrics on male participation in healing programs and their development as allies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ApproachPage;
