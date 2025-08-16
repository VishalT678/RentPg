import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const FeaturedProperties = ({ properties, onFilterChange, onSearchChange, searchTerm, filters, locationOptions, featureOptions, filteredProperties }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Properties</h2>
          <p className="text-gray-600">Discover the best PG accommodations in your area</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-custom p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rentz-purple"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.slice(0, 8).map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-xl shadow-custom overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => window.location.href = `/property/${property.id}`}
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
                  ₹{property.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{property.address}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{property.occupancy}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm">{property.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-rentz-purple hover:bg-rentz-purple/90">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
