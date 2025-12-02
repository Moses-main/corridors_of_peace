import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: "url(/hero-image.jpg)",
            filter: "blur(2px)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.2) 50%, rgba(29, 78, 216, 0.4) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-20 lg:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
              Empowering <span className="font-bold text-white">Women</span> and{" "}
              <span className="font-bold text-white">Girls</span> in Africa
              (Nig)
            </h1>
            <div className="h-1 w-20 bg-white/80 mb-8"></div>
            <p className="text-lg text-white/90 mb-10 max-w-lg leading-relaxed drop-shadow-md">
              Creating sustainable change through education, economic
              empowerment, and social protection for women and girls in Africa
              (Nig).
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/donate"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-md text-center transition duration-300 hover:shadow-lg transform hover:-translate-y-0.5 border border-white/20 hover:border-white/40"
              >
                Support Our Cause
              </Link>
              <Link
                to="/about"
                className="text-white/90 hover:text-white font-medium py-3 px-8 text-center transition duration-300 flex items-center justify-center group backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20"
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
          <div className="hidden lg:flex items-center justify-center relative h-full">
            <div className="relative w-full max-w-md">
              {/* Animated floating elements */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
              <div className="absolute -bottom-10 left-0 w-64 h-64 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

              {/* Decorative circular elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-white/20 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border-2 border-white/20 animate-pulse animation-delay-1000"></div>

              {/* Main decorative element */}
              <div className="relative z-10 w-full">
                <div className="mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-yellow-400/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>

                {/* Floating dots */}
                <div className="absolute -top-6 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-10 h-16 rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-4 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
