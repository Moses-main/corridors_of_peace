import { motion } from "framer-motion";

const VideoGallery = () => {
  const videos = [
    // YouTube video first
    {
      id: 1,
      title: "Interkulturelles Fest Dornach 2022",
      youtubeId: "MbzEbps8SHw",
      description:
        "Celebrating cultural diversity at Interkulturelles Fest Dornach 2022",
      category: "cultural",
      isFeatured: true,
      thumbnail: "https://img.youtube.com/vi/MbzEbps8SHw/maxresdefault.jpg",
    },
    // Local videos
    {
      id: 2,
      title: "Benefit Concert 2025",
      description: "Highlights from our annual benefit concert in Switzerland",
      category: "events",
      localVideo:
        "https://corridorsofpeace.online/wp-content/uploads/2025/11/Corridors-Of-Peace-Switzerland-Benefit-Concert-2025.mp4",
      thumbnail: "/images/concert-thumbnail.jpg",
    },
    {
      id: 3,
      title: "Corridors of Peace Switzerland",
      description: "Our journey and impact in Switzerland",
      category: "about",
      localVideo: "/videos/corrisdors_of_peace_switzerland.mp4",
      thumbnail: "/images/switzerland-thumbnail.jpg",
    },
  ];

  // Filter videos by category if needed
  // const culturalVideos = videos.filter(video => video.category === 'cultural');
  // const concertVideos = videos.filter(video => video.category === 'concerts');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Cultural Showcase
          </h2>
          <div className="mt-4 h-1 w-20 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-500">
            Experience the vibrant culture and community events we're proud to
            be part of
          </p>
        </div>

        {/* Featured YouTube Video - Large Player */}
        {videos
          .filter((video) => video.isFeatured)
          .map((featuredVideo) => (
            <div key={featuredVideo.id} className="mb-16">
              <div className="relative pt-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?rel=0&showinfo=0&autoplay=0`}
                  title={featuredVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          ))}

        {/* Grid for local videos */}
        {videos.filter((video) => !video.isFeatured).length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              More Videos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {videos
                .filter((video) => !video.isFeatured)
                .map((video, index) => (
                  <motion.div
                    key={video.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative pt-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg bg-black">
                      {video.localVideo && (
                        <video
                          controls
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          poster={video.thumbnail}
                          preload="metadata"
                        >
                          <source src={video.localVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
