import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mt-10 mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
            <div className="mt-3 h-1 w-16 sm:w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions
              or inquiries.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Left side - Illustration */}
              <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden md:rounded-l-lg">
                {/* Abstract connection shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Background circles - contained within parent */}
                  <div className="absolute right-0 top-0 w-64 h-64 -mr-20 -mt-20 bg-blue-500 rounded-full opacity-10"></div>
                  <div className="absolute left-0 bottom-0 w-64 h-64 -ml-20 -mb-20 bg-blue-400 rounded-full opacity-10"></div>

                  {/* Connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Curved connection line */}
                    <path
                      d="M20,50 Q50,30 80,50"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                      fill="none"
                      strokeDasharray="2 2"
                    />
                    {/* Dots along the curve */}
                    {[20, 30, 40, 50, 60, 70, 80].map((x, i) => {
                      const y = 50 - Math.pow((x - 50) / 30, 2) * 20;
                      return (
                        <circle
                          key={i}
                          cx={x}
                          cy={y}
                          r={0.8}
                          fill="rgba(255,255,255,0.4)"
                          className="animate-pulse"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "2s",
                            animationIterationCount: "infinite",
                          }}
                        />
                      );
                    })}
                  </svg>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center">
                  <div className="text-center max-w-md mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Let's Connect
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                      Reach out to us and let's start a conversation about peace
                      and development.
                    </p>

                    {/* Abstract people illustration */}
                    <div className="relative h-64 w-full mb-8">
                      {/* Left person */}
                      <div className="absolute left-1/4 bottom-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transform -translate-x-1/2">
                        <svg
                          className="w-3/4 h-3/4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>

                      {/* Right person */}
                      <div className="absolute right-1/4 bottom-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transform translate-x-1/2">
                        <svg
                          className="w-3/4 h-3/4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>

                      {/* Connection dots */}
                      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full opacity-50"
                            style={{
                              animation: `pulse 2s infinite ${i * 0.2}s`,
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Abstract shapes */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-32 h-32 rounded-full border-4 border-white/20"></div>
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border-4 border-white/30 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border-4 border-white/40 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>

                    <div className="mt-8 text-blue-100">
                      <p className="mb-2">
                        We're here to listen and collaborate.
                      </p>
                      <p>Your message matters to us.</p>
                    </div>
                  </div>

                  {/* Small logo at bottom */}
                  <div className="mt-auto pt-4 text-center">
                    <p className="mt-2 text-sm text-blue-200">
                      Building bridges for peace and development
                    </p>
                  </div>
                </div>

                {/* Animation keyframes moved to global CSS */}
              </div>
              {/* Right side - Contact Info */}
              <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100 md:rounded-r-lg">
                <div className="text-center">
                  <div className="mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
                    <img
                      src="/images/logo/cop_logo.jpg"
                      alt="Corridors of Peace Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We'd love to hear from you. Reach out to us through any of the
                  following channels:
                </p>

                <div className="w-full space-y-5 text-left max-w-xs mx-auto">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:info@corridorsofpeace.org"
                      className="text-blue-600 hover:underline"
                    >
                      info@corridorsofpeace.org
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a
                      href="tel:+235123456789"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      +351-928-116-400
                    </a>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 mt-1">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                    </div>
                    <div>
                      <p className="text-gray-700">1234 Peace Avenue</p>
                      <p className="text-gray-700">N'Djamena, Chad</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center space-x-6">
                  {[
                    { name: "Facebook", href: "#", icon: "facebook" },
                    { name: "Twitter", href: "#", icon: "twitter" },
                    { name: "Instagram", href: "#", icon: "instagram" },
                    { name: "LinkedIn", href: "#", icon: "linkedin" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                      aria-label={`Visit our ${item.name} page (opens in new tab)`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {item.icon === "facebook" && (
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        )}
                        {item.icon === "twitter" && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {item.icon === "instagram" && (
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 15a3 3 0 110-6 3 3 0 010 6zm0-7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                            clipRule="evenodd"
                          />
                        )}
                        {item.icon === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
