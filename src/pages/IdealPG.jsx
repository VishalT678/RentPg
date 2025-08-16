import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FindIdealPG from '@/components/FindIdealPG';
import FilterBar from '@/components/FilterBar';
import FeaturedProperties from '@/components/FeaturedProperties';
import AIRecommendations from '@/components/AIRecommendations';
import { 
  Sparkles, 
  Target, 
  Shield, 
  DollarSign, 
  Star, 
  Users, 
  MapPin, 
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
  Heart,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const IdealPG = () => {
  const navigate = useNavigate();
  
  // Mock featured properties data (would come from API in real app)
  const allProperties = [
    {
      id: "1",
      title: "Luxury PG Accommodation in Sector 17",
      address: "Sector 17, Chandigarh",
      price: 12000,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
      amenities: ["WiFi", "AC", "Food", "Laundry"],
      occupancy: "Single Room"
    },
    {
      id: "2",
      title: "Modern Co-living Space near Law Gate",
      address: "Law Gate, Chandigarh",
      price: 9500,
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      amenities: ["WiFi", "Gym", "Food", "Power Backup"],
      occupancy: "Double Sharing"
    },
    {
      id: "3",
      title: "Premium PG near Green Valley",
      address: "Green Valley, Chandigarh",
      price: 10500,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: ["WiFi", "AC", "Food", "TV", "Housekeeping"],
      occupancy: "Single Room"
    },
    {
      id: "4",
      title: "Khooozo Rooms in Deep Nagar",
      address: "Deep Nagar, Chandigarh",
      price: 7500,
      rating: 4.2,
      imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "Food", "Parking", "Security"],
      occupancy: "Triple Sharing"
    },
    {
      id: "5",
      title: "RS Rooms near University",
      address: "Sector 14, Chandigarh",
      price: 11000,
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
      amenities: ["WiFi", "AC", "Food", "Study Room", "Gym"],
      occupancy: "Double Sharing"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    locations: [],
    priceRange: [3000, 20000],
    features: []
  });

  // Extract unique location options from the data
  const locationOptions = useMemo(() => {
    const locations = new Set();
    allProperties.forEach(property => {
      const location = property.address.split(',')[0].trim();
      locations.add(location);
    });
    return Array.from(locations);
  }, [allProperties]);

  // Extract unique feature options from the data
  const featureOptions = useMemo(() => {
    const features = new Set();
    allProperties.forEach(property => {
      property.amenities.forEach(amenity => features.add(amenity));
    });
    return Array.from(features);
  }, [allProperties]);

  // Filter properties based on search term and filters
  const filteredProperties = useMemo(() => {
    return allProperties.filter(property => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Location filter
      const locationMatch = filters.locations.length === 0 || 
        filters.locations.some(location => 
          property.address.includes(location)
        );
      
      // Price range filter
      const priceMatch = property.price >= filters.priceRange[0] && 
                         property.price <= filters.priceRange[1];
      
      // Features filter
      const featuresMatch = filters.features.length === 0 || 
        filters.features.every(feature => 
          property.amenities.includes(feature)
        );
      
      return matchesSearch && locationMatch && priceMatch && featuresMatch;
    });
  }, [allProperties, searchTerm, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      locations: [],
      priceRange: [3000, 20000],
      features: []
    });
  };

  const handleSearch = (searchData) => {
    console.log('Search data:', searchData);
    // In a real app, this would trigger an API call
  };

  const stats = {
    totalProperties: 150,
    happyTenants: 1200,
    avgRating: 4.6,
    cities: 8
  };

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Smart Matching",
      description: "AI analyzes your preferences and lifestyle to find the perfect PG match."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Listings",
      description: "All PGs are personally verified by our team for quality and safety."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Best Prices",
      description: "Compare prices and amenities to find the best value for your budget."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Real Reviews",
      description: "Read authentic reviews from verified tenants who've lived there."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student",
      content: "Found my perfect PG through Rentz! The AI recommendations were spot on.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rahul Kumar",
      role: "Working Professional",
      content: "The verification process gave me confidence. Great experience overall!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Neha Patel",
      role: "Student",
      content: "Best PG booking platform I've used. Highly recommend!",
      rating: 5,
      avatar: "NP"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-rentz-purple/10 via-rentz-lightPurple/5 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-rentz-purple" />
                <Badge className="bg-rentz-purple/10 text-rentz-purple border-rentz-purple/20">
                  AI-Powered Search
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Find Your <span className="text-rentz-purple">Ideal PG</span> Accommodation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Tell us what matters most to you, and our AI will help you find the perfect place to call home. 
                From budget-friendly options to luxury accommodations, we've got you covered.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rentz-purple">{stats.totalProperties}+</div>
                  <div className="text-sm text-gray-600">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rentz-purple">{stats.happyTenants}+</div>
                  <div className="text-sm text-gray-600">Happy Tenants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rentz-purple">{stats.avgRating}</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rentz-purple">{stats.cities}</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
            
            {/* AI Search Component */}
            <div className="max-w-4xl mx-auto">
              <FindIdealPG 
                locationOptions={locationOptions}
                featureOptions={featureOptions}
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Rentz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with human expertise to deliver the best PG hunting experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rentz-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-rentz-purple">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="container mx-auto px-4 py-16">
          <AIRecommendations />
        </div>

        {/* Featured Properties Section */}
        <div className="container mx-auto px-4 py-16" id="featured-properties">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Properties</h2>
            <p className="text-gray-600">Discover handpicked PG accommodations that match your preferences</p>
          </div>
          
          <FilterBar
            locationOptions={locationOptions}
            featureOptions={featureOptions}
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          
          <FeaturedProperties
            properties={allProperties}
            onFilterChange={handleFilterChange}
            onSearchChange={setSearchTerm}
            searchTerm={searchTerm}
            filters={filters}
            locationOptions={locationOptions}
            featureOptions={featureOptions}
            filteredProperties={filteredProperties}
          />
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
              <p className="text-gray-600">Real experiences from tenants who found their perfect PG</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rentz-purple rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rentz-purple to-rentz-lightPurple py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect PG?</h2>
            <p className="text-rentz-purple/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied tenants who found their ideal accommodation through Rentz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/signup')}
                className="bg-white text-rentz-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Now
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rentz-purple transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IdealPG;
