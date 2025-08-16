import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student",
      rating: 5,
      text: "Found my perfect PG through Rentz! The AI recommendations were spot on and the booking process was super smooth.",
      avatar: "👩‍🎓"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Working Professional",
      rating: 5,
      text: "As a working professional, I needed a PG with flexible timings. Rentz helped me find exactly what I was looking for.",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Student",
      rating: 4,
      text: "Great experience! The verified listings gave me confidence, and the reviews helped me make the right choice.",
      avatar: "👩‍🎓"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Real experiences from tenants who found their perfect PG</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 h-6 w-6 text-rentz-purple/20" />
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
