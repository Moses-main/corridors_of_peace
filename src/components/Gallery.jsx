import React from 'react';

const galleryImages = [
  {
    id: 1,
    src: '/copin_townhall.jpg',
    alt: 'Townhall meeting',
    category: 'events'
  },
  {
    id: 2,
    src: '/copin_facilitators.jpg',
    alt: 'Facilitators at work',
    category: 'team'
  },
  {
    id: 3,
    src: '/copin_fulani_clear.jpg',
    alt: 'Community engagement',
    category: 'community'
  },
  {
    id: 4,
    src: '/copin_village_meeting.jpg',
    alt: 'Village meeting',
    category: 'events'
  },
  {
    id: 5,
    src: '/copin_elderly_woman_pointing.jpg',
    alt: 'Elderly woman sharing',
    category: 'community'
  },
  {
    id: 6,
    src: '/copin_board_meeting.jpg',
    alt: 'Board meeting',
    category: 'team'
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work in Action
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
