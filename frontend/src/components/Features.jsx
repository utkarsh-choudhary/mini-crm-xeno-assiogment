import React from 'react';

const Features = () => {
  return (
    <div className="features-section bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-blue-600 text-lg font-semibold text-center mb-2">FEATURES</h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
        Powerful Features to Boost Your Business
      </h3>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Discover the key features that will streamline your workflow and drive growth
      </p>
      
      <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="feature-box p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-blue-50">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Contact Management</h4>
          <p className="text-gray-600">Easily organize and access all your contacts in one place</p>
        </div>
        
        <div className="feature-box p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-blue-50">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Sales Pipeline Tracking</h4>
          <p className="text-gray-600">Visualize and manage your sales pipeline efficiently</p>
        </div>
        
        <div className="feature-box p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-blue-50">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Task Automation</h4>
          <p className="text-gray-600">Automate repetitive tasks to save time and increase productivity</p>
        </div>
        
        <div className="feature-box p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-blue-50">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Reporting and Analytics</h4>
          <p className="text-gray-600">Generate detailed reports and gain valuable insights with analytics tools</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
