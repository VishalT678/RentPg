import React from 'react';
import { Star, MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-custom overflow-hidden hover:shadow-xl transition-shadow">
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
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm">{property.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
