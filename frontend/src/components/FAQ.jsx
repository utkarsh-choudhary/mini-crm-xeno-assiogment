import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column with Video */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold">Common questions</h2>
            <p className="mt-4 text-blue-200">
              Here are some of the most common questions that we get.
            </p>

            {/* Embedded YouTube Video */}
            <div className="mt-8">
            <iframe
  width="100%"
  height="200"
  src="https://www.youtube.com/embed/sQD7kaZ5h0s"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="space-y-8">
              {/* Question 1 */}
              <div>
                <h3 className="text-xl font-semibold">What is CRM?</h3>
                <p className="mt-2 text-blue-200">
                  CRM stands for Customer Relationship Management. It is a technology for managing all your company's relationships and interactions with customers and potential customers.
                </p>
              </div>

              {/* Question 2 */}
              <div>
                <h3 className="text-xl font-semibold">Why is CRM important for businesses?</h3>
                <p className="mt-2 text-blue-200">
                  CRM is important for businesses as it helps in improving customer relationships, increasing sales, streamlining processes, and enhancing customer service.
                </p>
              </div>

              {/* Question 3 */}
              <div>
                <h3 className="text-xl font-semibold">How can CRM benefit my business?</h3>
                <p className="mt-2 text-blue-200">
                  CRM can benefit your business by providing a centralized database for customer information, automating tasks, improving communication, and analyzing customer data for better decision-making.
                </p>
              </div>

              {/* Question 4 */}
              <div>
                <h3 className="text-xl font-semibold">Is CRM only for large enterprises?</h3>
                <p className="mt-2 text-blue-200">
                  No, CRM solutions are available for businesses of all sizes, from small startups to large enterprises. There are options that can be tailored to fit the specific needs and budget of any business.
                </p>
              </div>

              {/* Question 5 */}
              <div>
                <h3 className="text-xl font-semibold">How do I choose the right CRM system for my business?</h3>
                <p className="mt-2 text-blue-200">
                  To choose the right CRM system for your business, consider factors such as your business size, industry requirements, budget, integration capabilities, ease of use, and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
