import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Approach", href: "/approach" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
        { name: "Donate", href: "/donate" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { name: "Education Programs", href: "/projects#education" },
        { name: "Healthcare Initiatives", href: "/projects#healthcare" },
        { name: "Community Development", href: "/projects#community" },
        { name: "Cultural Exchange", href: "/projects#cultural" },
        { name: "Women Empowerment", href: "/projects#empowerment" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { name: "Become a Volunteer", href: "/get-involved/volunteer" },
        { name: "Partner With Us", href: "/get-involved/partnerships" },
        { name: "Organize an Event", href: "/get-involved/events" },
        { name: "Start a Fundraiser", href: "/get-involved/fundraiser" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="h-6 w-6" />,
      href: "https://facebook.com/corridorsofpeace",
      label: "Facebook",
    },
    {
      icon: <FaTwitter className="h-6 w-6" />,
      href: "https://twitter.com/corridorsofpeace",
      label: "Twitter",
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      href: "https://instagram.com/corridorsofpeace",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      href: "https://linkedin.com/company/corridorsofpeace",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube className="h-6 w-6" />,
      href: "https://youtube.com/corridorsofpeace",
      label: "YouTube",
    },
  ];

  const partners = [
    {
      name: "Dominic Frank",
      logo: "/images/footer/Dominic_Frank.jpg",
      position: "International Director",
    },
    {
      name: "Petra Vahle",
      logo: "/images/footer/petra_vahle.jpg",
      position: "International Women Director",
    },
    {
      name: "Urs Herzog",
      logo: "/images/footer/urs-herzog.jpeg",
      position: "International Advisor",
    },
    {
      name: "Stella Egwu",
      logo: "/images/footer/stella-egwu.jpg",
      position: "President, CEO & National Dir. Nig.",
    },
    {
      name: "Patience Dale",
      logo: "/images/footer/Patience.jpg",
      position: "Secretary",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="mb-16 pb-8 border-b border-gray-800 text-center">
          <div className="mb-2">
            <h3 className="text-2xl md:text-5xl font-semibold text-white inline-block relative">
              ORGANIZATION
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-red-600"></span>
            </h3>
          </div>
          <h2 className="text-2xl mt-10 font-medium text-gray-300 mb-12">
            Knowing who you support
          </h2>

          {/* Updated Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <motion.div
                  className="h-40 w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 bg-white/5 rounded-full p-2 hover:bg-white/10 transition-all duration-300 mb-4"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{partner.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="relative group">
                {/* Circular logo with border and shadow */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src="/images/logo/cop_logo.jpg"
                    alt="Corridors of Peace"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Animated ring effect on hover */}
                <div className="absolute -inset-2 rounded-full border-2 border-blue-300 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow pointer-events-none transition-opacity duration-300"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering women and girls in Africa (Nig) through education,
              economic opportunities, and social protection programs to create
              sustainable change in their communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (sectionIndex + 1) }}
            >
              <h3 className="text-lg font-semibold text-white relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-red-600"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-red-600"></span>
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start">
                <svg
                  className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
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
                <span>
                  Royal Plaza, Obinze Port-Harcourt Road, Owerri,Imo State
                  Africa
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 text-red-500 mr-2"
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
                <a
                  href="mailto:corridorsofpeacenigeria@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  corridorsofpeacenigeria@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 text-red-500 mr-2"
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
                <a
                  href="mailto:corridorspeace@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  corridorspeace@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 text-red-500 mr-2"
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
                <a
                  href="tel:+2341234567890"
                  className="hover:text-white transition-colors"
                >
                  +351-928-116-400
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 text-red-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon - Fri, 9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="bg-gray-800 py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Corridors of Peace. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
