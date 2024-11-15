import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
          <img src='../xeno.png' className='w-12 h-12'/>
        
        
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer"
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="features-section"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="pricing-section"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="faq-section"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <RouterLink to="/login">
            <button className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md">
              Login
            </button>
          </RouterLink>
          <RouterLink to="/register">
            <button className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md">
              Register
            </button>
          </RouterLink>
          <RouterLink to="/dashboard">
            <button className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md">
              Dashboard UI
            </button>
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
