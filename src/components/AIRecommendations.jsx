import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Star, MapPin, Users } from 'lucide-react';

const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Perfect for Students",
      description: "Based on your preferences, we recommend PGs near universities with study-friendly environments.",
      icon: "🎓",
      features: ["Near University", "Study Room", "Quiet Environment"]
    },
    {
      id: 2,
      title: "Working Professional Friendly",
      description: "PGs with flexible timings, good connectivity, and professional amenities.",
      icon: "💼",
      features: ["24/7 Access", "Good Connectivity", "Professional Environment"]
    },
    {
      id: 3,
      title: "Budget-Friendly Options",
      description: "Quality PGs that fit your budget without compromising on essential amenities.",
      icon: "💰",
      features: ["Affordable", "Essential Amenities", "Good Value"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-rentz-purple" />
            <h2 className="text-3xl font-bold text-gray-800">AI-Powered Recommendations</h2>
          </div>
          <p className="text-gray-600">Get personalized PG suggestions based on your preferences and lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-gradient-to-br from-rentz-purple/5 to-rentz-lightPurple/5 rounded-xl p-6 border border-rentz-purple/10">
              <div className="text-4xl mb-4">{rec.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{rec.title}</h3>
              <p className="text-gray-600 mb-4">{rec.description}</p>
              <div className="space-y-2">
                {rec.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-rentz-purple rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-rentz-purple hover:bg-rentz-purple/90">
                View Recommendations
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
