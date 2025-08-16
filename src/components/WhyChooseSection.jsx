import React from 'react';
import { Shield, Star, Clock, Users } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8 text-rentz-purple" />,
      title: "Verified Properties",
      description: "All PGs are personally verified by our team for quality and safety standards."
    },
    {
      icon: <Star className="h-8 w-8 text-rentz-purple" />,
      title: "Best Reviews",
      description: "Read authentic reviews from real tenants to make informed decisions."
    },
    {
      icon: <Clock className="h-8 w-8 text-rentz-purple" />,
      title: "Quick Booking",
      description: "Book your preferred PG instantly with our streamlined process."
    },
    {
      icon: <Users className="h-8 w-8 text-rentz-purple" />,
      title: "24/7 Support",
      description: "Get help anytime with our dedicated customer support team."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Rentz?</h2>
          <p className="text-gray-600">We make finding your perfect PG accommodation simple and reliable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-custom">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
