import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Star, ArrowLeft, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [bookingData, setBookingData] = useState({
    checkInDate: '',
    roomType: '',
    duration: '1'
  });
  const [step, setStep] = useState(1);

  const mockProperty = {
    id: id,
    title: "Luxury PG Accommodation in Sector 17",
    address: "Sector 17, Chandigarh, Punjab 160017",
    price: 12000,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1057&q=80",
    roomTypes: [
      { type: "Single Room", price: 12000, available: 2 },
      { type: "Double Sharing", price: 8500, available: 1 },
      { type: "Triple Sharing", price: 6500, available: 0 }
    ]
  };

  useEffect(() => {
    setProperty(mockProperty);
  }, [id]);

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    const selectedRoom = property?.roomTypes.find(room => room.type === bookingData.roomType);
    if (!selectedRoom) return 0;
    return selectedRoom.price * parseInt(bookingData.duration);
  };

  const handleBooking = () => {
    if (!bookingData.checkInDate || !bookingData.roomType) {
      alert('Please fill in all required fields');
      return;
    }
    setStep(2);
  };

  if (!property) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Property
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-custom p-6">
                <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
                
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="checkInDate">Check-in Date</Label>
                      <Input
                        id="checkInDate"
                        type="date"
                        value={bookingData.checkInDate}
                        onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <Label htmlFor="roomType">Room Type</Label>
                      <Select value={bookingData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          {property.roomTypes.map((room, index) => (
                            <SelectItem key={index} value={room.type} disabled={room.available === 0}>
                              {room.type} - ₹{room.price.toLocaleString()}/month ({room.available} available)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="duration">Duration (months)</Label>
                      <Select value={bookingData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Month</SelectItem>
                          <SelectItem value="3">3 Months</SelectItem>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={handleBooking} className="w-full bg-rentz-purple hover:bg-rentz-purple/90">
                      Continue to Payment
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="text-center space-y-6">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                      <p className="text-gray-600">Your booking has been successfully confirmed. You will receive a confirmation email shortly.</p>
                    </div>
                    <div className="space-y-2">
                      <Button onClick={() => navigate('/dashboard')} className="w-full bg-rentz-purple hover:bg-rentz-purple/90">
                        Go to Dashboard
                      </Button>
                      <Button variant="outline" onClick={() => navigate('/')} className="w-full">
                        Back to Home
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-custom p-6">
                <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img src={property.imageUrl} alt={property.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold">{property.title}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{property.address}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span>{property.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Room Type:</span>
                      <span className="font-medium">{bookingData.roomType || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{bookingData.duration} month(s)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span className="font-medium">{bookingData.checkInDate || 'Not selected'}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-rentz-purple">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
