import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="pricing-section py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-blue-600">PRICING</h2>
      <h3 className="text-2xl font-semibold mt-4 text-gray-800">Choose the Right Plan for Your Business</h3>
      <p className="text-gray-500 mt-2 mb-12 max-w-lg mx-auto">
        Select a plan that fits your needs and helps you grow your business.
      </p>
      
      <div className="pricing-grid grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {/* FREE Plan */}
        <div className="pricing-box p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-xl font-bold text-gray-700">FREE</h4>
          <p className="text-gray-500 mt-2">Get started with our basic CRM features for free</p>
          <div className="price text-4xl font-bold text-blue-600 mt-4 mb-6">$0</div>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Contact Management</li>
            <li>✔ Email Integration</li>
            <li>✔ Task Tracking</li>
            <li>✔ Basic Reporting</li>
          </ul>
          <RouterLink to="/register">
            <button className="pricing-button mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Continue with Free
            </button>
          </RouterLink>
        </div>
        
        {/* BASIC Plan */}
        <div className="pricing-box p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h4 className="text-xl font-bold text-gray-700">BASIC</h4>
          <p className="text-gray-500 mt-2">Upgrade to unlock more advanced CRM capabilities</p>
          <div className="price text-4xl font-bold text-blue-600 mt-4 mb-6">$29</div>
          <ul className="text-gray-600 space-y-2">
            <li>✔ All features of FREE plan</li>
            <li>✔ Customizable Dashboards</li>
            <li>✔ Sales Pipeline Management</li>
            <li>✔ Email Campaigns</li>
            <li>✔ Advanced Reporting</li>
          </ul>
          <RouterLink to="/register">
            <button className="pricing-button mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Try the Basic plan
            </button>
          </RouterLink>
        </div>
        
        {/* PRO Plan */}
        <div className="pricing-box p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-xl font-bold text-gray-700">PRO</h4>
          <p className="text-gray-500 mt-2">Experience the full power of our CRM solution for your business</p>
          <div className="price text-4xl font-bold text-blue-600 mt-4 mb-6">$59</div>
          <ul className="text-gray-600 space-y-2">
            <li>✔ All features of BASIC plan</li>
            <li>✔ Automation Workflows</li>
            <li>✔ Custom Fields and Tags</li>
            <li>✔ Integration with Third-Party Apps</li>
            <li>✔ Dedicated Customer Support</li>
          </ul>
          <RouterLink to="/register">
            <button className="pricing-button mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Try the PRO plan
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
