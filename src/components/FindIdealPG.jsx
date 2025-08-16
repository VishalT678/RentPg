import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  MapPin, 
  Building, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  Star,
  Users,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Tv,
  Shield,
  Home,
  GraduationCap,
  Briefcase,
  Heart,
  Clock,
  TrendingUp
} from 'lucide-react';

const FindIdealPG = ({ locationOptions, featureOptions, onSearch }) => {
  const [formData, setFormData] = useState({
    location: '',
    budget: [5000, 15000],
    occupancy: '',
    features: [],
    lifestyle: '',
    duration: '',
    moveInDate: ''
  });

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const occupancyOptions = [
    { value: 'single', label: 'Single Room', icon: <Home className="h-4 w-4" /> },
    { value: 'double', label: 'Double Sharing', icon: <Users className="h-4 w-4" /> },
    { value: 'triple', label: 'Triple Sharing', icon: <Users className="h-4 w-4" /> },
    { value: 'deluxe', label: 'Deluxe Room', icon: <Star className="h-4 w-4" /> }
  ];

  const lifestyleOptions = [
    { value: 'student', label: 'Student', icon: <GraduationCap className="h-4 w-4" /> },
    { value: 'professional', label: 'Working Professional', icon: <Briefcase className="h-4 w-4" /> },
    { value: 'family', label: 'Family', icon: <Users className="h-4 w-4" /> }
  ];

  const durationOptions = [
    { value: '1-3', label: '1-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12+', label: '12+ months' }
  ];

  const popularFeatures = [
    { value: 'wifi', label: 'WiFi', icon: <Wifi className="h-4 w-4" /> },
    { value: 'ac', label: 'AC', icon: <Building className="h-4 w-4" /> },
    { value: 'food', label: 'Food', icon: <Utensils className="h-4 w-4" /> },
    { value: 'parking', label: 'Parking', icon: <Car className="h-4 w-4" /> },
    { value: 'gym', label: 'Gym', icon: <Dumbbell className="h-4 w-4" /> },
    { value: 'tv', label: 'TV', icon: <Tv className="h-4 w-4" /> },
    { value: 'security', label: 'Security', icon: <Shield className="h-4 w-4" /> }
  ];

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSearch = () => {
    onSearch(formData);
  };

  const handleBudgetChange = (e, type) => {
    const value = parseInt(e.target.value);
    setFormData(prev => ({
      ...prev,
      budget: type === 'min' 
        ? [value, prev.budget[1]]
        : [prev.budget[0], value]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Main Search Section */}
      <Card className="bg-gradient-to-br from-rentz-purple/5 to-rentz-lightPurple/5 border-rentz-purple/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-rentz-purple">
            <Sparkles className="h-5 w-5" />
            AI-Powered PG Finder
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic Search */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search location, area, or landmark..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple focus:border-transparent"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <select
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple focus:border-transparent"
                value={formData.occupancy}
                onChange={(e) => setFormData({...formData, occupancy: e.target.value})}
              >
                <option value="">Room Type</option>
                {occupancyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <Button 
              onClick={handleSearch}
              className="bg-rentz-purple hover:bg-rentz-purple/90 h-full gap-2"
            >
              <Search className="h-5 w-5" />
              Find PG
            </Button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="h-4 w-4 text-rentz-purple" />
              <span>AI analyzes your preferences for perfect matches</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {showAdvancedFilters ? 'Hide Filters' : 'Advanced Filters'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Advanced Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Budget Range */}
            <div>
              <h4 className="font-medium mb-3">Budget Range (₹)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Min Budget</label>
                  <input
                    type="number"
                    placeholder="5000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple"
                    value={formData.budget[0]}
                    onChange={(e) => handleBudgetChange(e, 'min')}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max Budget</label>
                  <input
                    type="number"
                    placeholder="15000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple"
                    value={formData.budget[1]}
                    onChange={(e) => handleBudgetChange(e, 'max')}
                  />
                </div>
              </div>
            </div>

            {/* Lifestyle */}
            <div>
              <h4 className="font-medium mb-3">Lifestyle</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {lifestyleOptions.map(option => (
                  <button
                    key={option.value}
                    className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                      formData.lifestyle === option.value
                        ? 'border-rentz-purple bg-rentz-purple/10 text-rentz-purple'
                        : 'border-gray-300 hover:border-rentz-purple/50'
                    }`}
                    onClick={() => setFormData({...formData, lifestyle: option.value})}
                  >
                    {option.icon}
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <h4 className="font-medium mb-3">Stay Duration</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {durationOptions.map(option => (
                  <button
                    key={option.value}
                    className={`p-3 rounded-lg border transition-colors ${
                      formData.duration === option.value
                        ? 'border-rentz-purple bg-rentz-purple/10 text-rentz-purple'
                        : 'border-gray-300 hover:border-rentz-purple/50'
                    }`}
                    onClick={() => setFormData({...formData, duration: option.value})}
                  >
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Move-in Date */}
            <div>
              <h4 className="font-medium mb-3">Move-in Date</h4>
              <input
                type="date"
                className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple"
                value={formData.moveInDate}
                onChange={(e) => setFormData({...formData, moveInDate: e.target.value})}
              />
            </div>

            {/* Features */}
            <div>
              <h4 className="font-medium mb-3">Must-Have Features</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {popularFeatures.map(feature => (
                  <button
                    key={feature.value}
                    className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                      formData.features.includes(feature.value)
                        ? 'border-rentz-purple bg-rentz-purple/10 text-rentz-purple'
                        : 'border-gray-300 hover:border-rentz-purple/50'
                    }`}
                    onClick={() => handleFeatureToggle(feature.value)}
                  >
                    {feature.icon}
                    <span className="text-sm font-medium">{feature.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Recommendations Preview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <TrendingUp className="h-5 w-5" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Best Time to Book</p>
                <p className="text-xs text-gray-600">1-2 months before move-in</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <Heart className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Popular Areas</p>
                <p className="text-xs text-gray-600">Sector 17, Law Gate, Green Valley</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Avg. Rating</p>
                <p className="text-xs text-gray-600">4.6/5 from 500+ reviews</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FindIdealPG;
