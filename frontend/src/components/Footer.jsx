import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700 text-center ml-auto">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600 flex flex-col ml-auto items-center text-center">
              Connect with me on any of these platforms!
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex items-center text-center justify-center">
              <a href="https://x.com/saartwts" target="_blank" rel="noopener noreferrer" className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full mr-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/saarthakmaini/" target="_blank" rel="noopener noreferrer" className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full mr-2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/SaarthakMaini/" target="_blank" rel="noopener noreferrer" className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full mr-2">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://saarthakmaini.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full mr-2">
                <i className="fab fa-blogger"></i>
              </a>
              <a href="https://drive.google.com/file/d/1-1Da5PTH7h7cn9PRPBMhRZLCsF756zH6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-white text-blueGray-700 shadow-lg font-normal h-10 w-32 flex items-center justify-center rounded-full mr-2">
                View Resume
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              ©2024 Saarthak Maini. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
