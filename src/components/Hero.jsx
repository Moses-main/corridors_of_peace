import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Women and Girls in Nigeria
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Join us in our mission to preserve dignity and create sustainable
              change through education, economic empowerment, and social
              protection for women and girls in Guereda.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/donate"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-center transition duration-300"
              >
                Donate Now
              </Link>
              <Link
                to="/projects"
                className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-lg text-center transition duration-300"
              >
                Our Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Empowered women in Nigeria"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-blue-900 font-bold text-lg">100+</p>
              <p className="text-sm">Women Empowered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
