import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Filter, 
  X, 
  MapPin, 
  DollarSign, 
  Star,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Tv,
  Shield,
  Building,
  Users,
  Home
} from 'lucide-react';

const FilterBar = ({ 
  locationOptions, 
  featureOptions, 
  filters, 
  onFilterChange, 
  onClearFilters 
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleLocationToggle = (location) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location];
    
    onFilterChange({ ...filters, locations: newLocations });
  };

  const handleFeatureToggle = (feature) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    
    onFilterChange({ ...filters, features: newFeatures });
  };

  const handlePriceChange = (min, max) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const activeFiltersCount = filters.locations.length + filters.features.length;

  return (
    <div className="space-y-4">
      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge className="ml-2">{activeFiltersCount}</Badge>
          )}
        </Button>
        
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {(filters.locations.length > 0 || filters.features.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {filters.locations.map(location => (
            <Badge
              key={location}
              variant="secondary"
              className="flex items-center gap-1"
            >
              <MapPin className="h-3 w-3" />
              {location}
              <button
                onClick={() => handleLocationToggle(location)}
                className="ml-1 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {filters.features.map(feature => (
            <Badge
              key={feature}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {getFeatureIcon(feature)}
              {feature}
              <button
                onClick={() => handleFeatureToggle(feature)}
                className="ml-1 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Filter Panel */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Advanced Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Location Filter */}
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {locationOptions.map(location => (
                  <button
                    key={location}
                    className={`p-2 rounded-lg border text-sm transition-colors ${
                      filters.locations.includes(location)
                        ? 'border-rentz-purple bg-rentz-purple/10 text-rentz-purple'
                        : 'border-gray-300 hover:border-rentz-purple/50'
                    }`}
                    onClick={() => handleLocationToggle(location)}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price Range
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Min Price</label>
                  <input
                    type="number"
                    placeholder="3000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange[1])}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max Price</label>
                  <input
                    type="number"
                    placeholder="20000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>

            {/* Features Filter */}
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Features
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {featureOptions.map(feature => (
                  <button
                    key={feature}
                    className={`flex items-center gap-2 p-2 rounded-lg border text-sm transition-colors ${
                      filters.features.includes(feature)
                        ? 'border-rentz-purple bg-rentz-purple/10 text-rentz-purple'
                        : 'border-gray-300 hover:border-rentz-purple/50'
                    }`}
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    {getFeatureIcon(feature)}
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Price Ranges */}
            <div>
              <h4 className="font-medium mb-3">Quick Price Ranges</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { label: 'Budget', range: [3000, 8000] },
                  { label: 'Mid-Range', range: [8000, 12000] },
                  { label: 'Premium', range: [12000, 18000] },
                  { label: 'Luxury', range: [18000, 25000] }
                ].map(({ label, range }) => (
                  <button
                    key={label}
                    className={`p-2 rounded-lg border text-sm transition-colors ${
                      filters.priceRange[0] === range[0] && filters.priceRange[1] === range[1]
                        ? 'border-rentz-purple bg-rentz-purple/10 text-rentz-purple'
                        : 'border-gray-300 hover:border-rentz-purple/50'
                    }`}
                    onClick={() => handlePriceChange(range[0], range[1])}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const getFeatureIcon = (feature) => {
  const icons = {
    'WiFi': <Wifi className="h-4 w-4" />,
    'AC': <Building className="h-4 w-4" />,
    'Food': <Utensils className="h-4 w-4" />,
    'Parking': <Car className="h-4 w-4" />,
    'Gym': <Dumbbell className="h-4 w-4" />,
    'TV': <Tv className="h-4 w-4" />,
    'Security': <Shield className="h-4 w-4" />,
    'Laundry': <Utensils className="h-4 w-4" />,
    'Study Room': <Home className="h-4 w-4" />,
    'Gaming Zone': <Tv className="h-4 w-4" />,
    'Power Backup': <Building className="h-4 w-4" />,
    'Housekeeping': <Users className="h-4 w-4" />
  };
  return icons[feature] || <Star className="h-4 w-4" />;
};

export default FilterBar;
