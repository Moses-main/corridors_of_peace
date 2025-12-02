import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Stella Egwu",
    role: "President, CEO & National Dir. Nig.",
    bio: "Visionary leader with a passion for community development and women empowerment.",
    image: "/images/footer/stella-egwu.jpg",
  },
  {
    id: 2,
    name: "Dominic Frank",
    role: "International Director",
    bio: "Experienced leader with a strong background in governance and strategic planning.",
    image: "/images/footer/Dominic_Frank.jpg",
  },
  {
    id: 3,
    name: "Petra Vahle",
    role: "International Women Director",
    bio: "Dedicated to women empowerment and gender equality initiatives.",
    image: "/images/footer/petra_vahle.jpg",
  },
  {
    id: 4,
    name: "Urs Herzog",
    role: "International Advisor",
    bio: "Providing strategic guidance and support for international development programs.",
    image: "/images/footer/urs-herzog.jpeg",
  },
  {
    id: 5,
    name: "Patience Dale",
    role: "Secretary",
    bio: "Dedicated professional ensuring smooth operations and effective communication within the organization.",
    image: "/images/footer/Patience.jpg",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals leading our mission to create
            positive change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100"
            >
              <div className="relative flex-grow overflow-hidden">
                <div className="relative pt-[100%] w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="p-5 text-center mt-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
