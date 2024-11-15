import React from 'react';
import "../index.css";

const Info = () => {
  // Sample data representing trusted companies (replace these with actual logos or company names)
  const companies = Array.from({ length: 100 }, (_, i) => `Company ${i + 1}`);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-900">Top 100+ Trusted Companies</h2>
        <p className="text-gray-600 mt-4">
          Our CRM software is trusted by top companies worldwide. Join the leaders who rely on us to build and manage their customer relationships.
        </p>
      </div>

      {/* Marquee effect for the companies list */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex space-x-4 animate-marquee">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-blue-900 font-medium text-lg min-w-max bg-gray-100 border border-gray-300 rounded-md p-6"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
