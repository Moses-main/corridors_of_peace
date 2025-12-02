import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCard = ({ name, role, image, shortBio, fullBio, contactInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100 flex flex-col h-full">
      <div className="relative pt-[100%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center 25%" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
            {name}
          </h3>
          <p className="text-blue-200 font-medium drop-shadow-md">{role}</p>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{shortBio}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
        >
          View Full Profile
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start md:items-center justify-center p-0 md:p-4 z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-none md:rounded-2xl shadow-2xl w-full md:max-w-5xl max-h-screen md:max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-shrink-0">
                <div className="relative h-40 md:h-48 bg-gradient-to-r from-blue-600 to-blue-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 p-6 md:p-8 text-white">
                    <h2
                      id="modal-title"
                      className="text-2xl md:text-3xl font-bold"
                    >
                      {name}
                    </h2>
                    <p className="text-blue-100 font-medium">{role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-gray-100 text-gray-500 hover:text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="overflow-y-auto flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 md:p-8 -mt-12 md:-mt-16">
                  <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl mt-10 shadow-lg p-1 border border-gray-100 relative z-20 max-w-xs mx-auto lg:mx-0">
                      <img
                        src={image}
                        alt={`${name}'s profile`}
                        className="w-full h-auto rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-gray-700 break-all hover:text-blue-600 transition-colors"
                          >
                            {contactInfo.email}
                          </a>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <a
                            href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            {contactInfo.phone}
                          </a>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
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
                          <span className="text-gray-700">
                            {contactInfo.location}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="prose prose-blue max-w-none">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-sm border mt-10 border-gray-100">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900  mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-100">
                          Biography
                        </h3>
                        <div className="prose prose-indigo max-w-none text-gray-700 text-sm md:text-base">
                          {fullBio.split("\n").map((paragraph, i) => (
                            <p key={i} className="mb-3 md:mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 bg-gray-50 px-4 md:px-8 py-3 md:py-4 flex justify-end sticky bottom-0">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LeadershipProfiles = () => {
  const profiles = [
    {
      name: "Suleiman Francis (Domino)",
      role: "Co-Founder & Independent Consultant",
      image: "/images/leadership/suleiman-francis.jpg",
      shortBio:
        "Seasoned professional with 25+ years of experience in Peace and Conflict Resolution, Social Work, Humanitarian Development, and Pastoral Theology.",
      fullBio:
        "Suleiman Francis (Domino) is a dedicated professional with over 25 years of intercontinental experience in Peace and Conflict Resolution, Social Work, Humanitarian Development, and Pastoral Theology. His extensive background includes working with diverse communities across multiple countries, focusing on peacebuilding, humanitarian assistance, and community development. He has been instrumental in various high-impact projects, including the rehabilitation of landmine victims in Cambodia and empowering war-affected communities in Chad and Nigeria.",
      contactInfo: {
        email: "dominofrank1@gmail.com",
        phone: "+351 928112 441",
        location: "Esteval Dos Mouros 126, 8100-0023 Alte",
      },
    },
    {
      name: "Stella Egwu",
      role: "President, CEO & Co-Founder",
      image: "/images/leadership/stella-egwu.jpg",
      shortBio:
        "Visionary leader and accomplished technologist with expertise in Computer Science and a profound commitment to peace building and youth empowerment.",
      fullBio:
        "Visionary leader and accomplished technologist with a unique blend of expertise in Computer Science and a profound commitment to peace building and youth empowerment. Currently serving as President, CEO, and Co-founder of Corridors of Peace International Nigeria, driving initiatives for conflict resolution and sustainable development. Brings over a decade of experience in technology roles, including current service as a Technologist within academia, combined with extensive voluntary service focused on education, mentorship, and community development across Nigeria and Chad. Adept at strategic planning, program development, and fostering collaboration for impactful social change.",
      contactInfo: {
        email: "Corridorsofpeacenigeria@gmail.com",
        phone: "+234 803 946 6260",
        location: "Nigeria",
      },
    },
    {
      name: "Patience",
      role: "Secretary",
      image: "/images/leadership/Patience.jpg",
      shortBio:
        "Seasoned professional with 25+ years of experience in Peace and Conflict Resolution, Social Work, Humanitarian Development, and Pastoral Theology.",
      fullBio:
        "Suleiman Francis (Domino) is a dedicated professional with over 25 years of intercontinental experience in Peace and Conflict Resolution, Social Work, Humanitarian Development, and Pastoral Theology. His extensive background includes working with diverse communities across multiple countries, focusing on peacebuilding, humanitarian assistance, and community development. He has been instrumental in various high-impact projects, including the rehabilitation of landmine victims in Cambodia and empowering war-affected communities in Chad and Nigeria.",
      contactInfo: {
        email: "dominofrank1@gmail.com",
        phone: "+351 928112 441",
        location: "Esteval Dos Mouros 126, 8100-0023 Alte",
      },
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              <span className="relative z-10">Our Founders</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0 opacity-70"></span>
            </h2>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders who founded Corridors of Peace and guide
            our mission with passion and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="flex">
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfiles;
