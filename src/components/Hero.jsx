import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-image.jpg)",
            backgroundPosition: "center top",
            top: "80px", // Start below the navigation bar
            height: "calc(100% - 80px)", // Adjust height to account for navbar
          }}
        >
          {/* Gradient overlay at bottom for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content with semi-transparent overlay */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-[calc(100vh-80px)] pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 -z-10"></div>

        {/* Text container with full width and styling */}
        <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-7xl mx-auto text-center bg-black/40 backdrop-blur-sm p-6 sm:p-8 lg:px-12 lg:py-10 border-y-2 border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="mb-8 text-center">
            <div className="flex flex-col items-center justify-center">
              {/* Logo Container */}
              <div className="mb-6 p-2 bg-white/10 rounded-full border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img 
                  src="/images/logo/cop_logo.jpg" 
                  alt="Corridors of Peace Logo" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-white/30 shadow-xl"
                />
              </div>
              
              {/* Text Container */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                  Corridors of Peace
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto my-4 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-blue-100 tracking-wider">
                  Humanitarian Foundation
                </h2>
              </div>
            </div>
          </div>

          <div className="relative w-full mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <h2 className="text-xl sm:text-md md:text-lg font-bold text-blue-100 italic font-serif tracking-wide px-4">
                <span className="relative">
                  <span className="absolute -left-4 -top-3 text-lg text-blue-300/50 font-serif">
                    "
                  </span>
                  Thinking Global, Acting Local
                  <span className="absolute -right-4 -bottom-3 text-2xl text-blue-300/50 font-serif">
                    "
                  </span>
                </span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>
          <p className="text-sm text-blue-200/70 font-light tracking-widest mb-2">
            OUR GUIDING PRINCIPLE
          </p>

          <p className="text-lg text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Creating sustainable change through education, economic empowerment,
            and social protection for women and girls in Africa (Nig).
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/donate"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md text-center transition duration-300 hover:shadow-lg transform hover:-translate-y-0.5 border border-blue-700 hover:border-blue-400"
            >
              Support Our Cause
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-100 font-medium py-3 px-8 text-center transition duration-300 flex items-center justify-center group bg-white/10 hover:bg-white/20 rounded-md border border-white/20 hover:border-white/40"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-10 h-16 rounded-full border-2 border-white/40 flex justify-center p-2 backdrop-blur-sm bg-black/30">
            <div className="w-1 h-4 bg-white/90 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
