import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Founder',
    role: 'Founder & Executive Director',
    bio: 'Visionary leader with a passion for community development and women empowerment.',
    image: '/copin1.jpg' // Replace with actual founder's image
  },
  {
    id: 2,
    name: 'Chairperson',
    role: 'Board Chairperson',
    bio: 'Experienced leader with a strong background in governance and strategic planning.',
    image: '/white_woman_on_black_lens.jpg' // Replace with actual chairperson's image
  },
  {
    id: 3,
    name: 'Program Director',
    role: 'Director of Programs',
    bio: 'Dedicated professional with extensive experience in program development and implementation.',
    image: '/woman-looking-up.jpg' // Replace with actual director's image
  },
  {
    id: 4,
    name: 'Community Lead',
    role: 'Community Engagement Lead',
    bio: 'Passionate about grassroots mobilization and community development initiatives.',
    image: '/copin_elderly_woman.jpg' // Replace with actual lead's image
  }
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
            Meet the dedicated individuals leading our mission to create positive change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
