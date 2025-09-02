import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 sm:text-7xl">404</h1>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Page not found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go back home
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Or try these pages:</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/about" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              About Us
            </Link>
            <Link to="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Our Projects
            </Link>
            <Link to="/donate" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Donate
            </Link>
            <Link to="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
