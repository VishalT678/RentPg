import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Calendar, ArrowLeft, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  const mockProperty = {
    id: id,
    title: "Luxury PG Accommodation in Sector 17",
    address: "Sector 17, Chandigarh, Punjab 160017",
    price: 12000,
    rating: 4.8,
    totalReviews: 127,
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1057&q=80",
    amenities: ["WiFi", "AC", "Food", "Laundry", "Gym", "TV", "Parking", "Security"],
    occupancy: "Single Room",
    availableRooms: 3,
    description: "Experience luxury living in our premium PG accommodation located in the heart of Sector 17, Chandigarh.",
    owner: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@example.com",
      rating: 4.9,
      responseTime: "Usually responds within 2 hours"
    }
  };

  useEffect(() => {
    setProperty(mockProperty);
  }, [id]);

  const handleBooking = () => {
    navigate(`/booking/${id}`);
  };

  const handleContactOwner = () => {
    window.open(`tel:${property.owner.phone}`);
  };

  const handleMessageOwner = () => {
    navigate('/messages');
  };

  if (!property) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>

        <div className="bg-white rounded-xl shadow-custom p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:w-1/3">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{property.address}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{property.rating}</span>
                  <span className="text-gray-600">({property.totalReviews} reviews)</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-3xl font-bold text-rentz-purple mb-2">
                  ₹{property.price.toLocaleString()}
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {property.availableRooms} rooms available
                </div>
                
                <div className="space-y-2">
                  <Button onClick={handleBooking} className="w-full bg-rentz-purple hover:bg-rentz-purple/90">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" onClick={handleContactOwner} className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Owner
                  </Button>
                  <Button variant="outline" onClick={handleMessageOwner} className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Owner
                  </Button>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Owner Information</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-rentz-purple rounded-full flex items-center justify-center text-white font-semibold">
                    {property.owner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{property.owner.name}</div>
                    <div className="text-sm text-gray-600">{property.owner.responseTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm">{property.owner.rating} Owner Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-custom p-6">
          <h2 className="text-xl font-bold mb-4">About this property</h2>
          <p className="text-gray-700 mb-6">{property.description}</p>
          
          <h3 className="font-semibold mb-3">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-rentz-purple rounded-full"></div>
                <span className="font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
