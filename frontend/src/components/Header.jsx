import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center text-center py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Main Heading with Animation */}
      <h1 className="text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in">
        Streamline Your Customer Relationships
      </h1>
      {/* Subheading with subtle entrance animation */}
      <p className="text-lg text-blue-700 mb-8 max-w-xl animate-slide-up">
        Manage your interactions efficiently with our CRM solution
      </p>
      {/* Button Group with hover effects and animations */}
      <div className="flex gap-4">
        <RouterLink to="/register">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 focus:ring-4 focus:ring-blue-300 transition transform duration-200 ease-out">
            Get Started
          </button>
        </RouterLink>
        <Link
          activeClass="active"
          to="faq-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 focus:ring-4 focus:ring-blue-300 transition transform duration-200 ease-out">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
