import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building, MapPin, DollarSign, Upload } from 'lucide-react';

const ListYourPG = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    address: '',
    price: '',
    occupancy: 'single',
    description: '',
    amenities: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('PG listing submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">List Your PG</h1>
          <p className="text-xl text-gray-600">Reach thousands of potential tenants</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-custom p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="propertyName" className="text-gray-700">Property Name</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="propertyName"
                    type="text"
                    placeholder="Enter property name"
                    className="pl-10"
                    value={formData.propertyName}
                    onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-gray-700">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter full address"
                    className="pl-10"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="price" className="text-gray-700">Monthly Rent (₹)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter rent amount"
                      className="pl-10"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="occupancy" className="text-gray-700">Occupancy Type</Label>
                  <select
                    id="occupancy"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.occupancy}
                    onChange={(e) => setFormData({...formData, occupancy: e.target.value})}
                  >
                    <option value="single">Single Room</option>
                    <option value="double">Double Sharing</option>
                    <option value="triple">Triple Sharing</option>
                    <option value="deluxe">Deluxe Room</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-700">Description</Label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Describe your PG accommodation..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label className="text-gray-700">Photos</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload photos or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-rentz-purple hover:bg-rentz-purple/90">
                List My PG
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListYourPG;
