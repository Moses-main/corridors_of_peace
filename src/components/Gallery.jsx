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
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                </div>
                
                {/* Hover Effect Elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
