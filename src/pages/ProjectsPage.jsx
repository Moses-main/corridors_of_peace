import { motion } from "framer-motion";
import Universal_Causes from "../components/Universal_Causes";

const projects = [
  {
    id: 1,
    title: "Women's Empowerment in Guereda",
    description:
      "Empowering women through vocational training, education, and leadership development programs in the Guereda region of Africa (Nig).",
    location: "Guereda, Africa (Nig)",
    beneficiaries: "100+ women and girls",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Education for Girls",
    description:
      "Providing access to quality education for girls through school fees, supplies, and community awareness programs.",
    location: "Eastern Africa (Nig)",
    beneficiaries: "200+ girls",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1523050853548-5d1a0b5a9e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Economic Empowerment",
    description:
      "Supporting women entrepreneurs with microloans, business training, and market access to start and grow their businesses.",
    location: "Multiple regions",
    beneficiaries: "50+ women entrepreneurs",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    title: "Health and Hygiene",
    description:
      "Improving health outcomes through hygiene education, menstrual health management, and access to clean water.",
    location: "Rural Africa (Nig)",
    beneficiaries: "500+ women and children",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const ProjectsPage = () => {
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
            Our Projects
          </h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference in the lives of women and
            girls in Africa (Nig).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Ongoing"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    {project.beneficiaries}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-10 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Support Our Work
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your donation can help us expand our programs and reach more women
            and girls in need.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Donate Now
          </a>
        </div>

        <Universal_Causes />
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
