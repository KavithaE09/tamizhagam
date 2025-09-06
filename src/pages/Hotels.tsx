import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import HotelCard from '../components/HotelCard';
import { tamilNaduDistricts } from '../data/tamilNaduData';

const Hotels = () => {
  const [searchParams] = useSearchParams();
  const initialDistrict = searchParams.get('district') || 'all';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'luxury'>('all');
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);

  // Flatten all hotels from all districts
  const allHotels = tamilNaduDistricts.flatMap(district => 
    district.hotels.map(hotel => ({ ...hotel, districtName: district.name }))
  );

  const filteredHotels = allHotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDistrict = selectedDistrict === 'all' || hotel.districtId === selectedDistrict;

    const matchesPrice = 
      priceRange === 'all' ||
      (priceRange === 'budget' && hotel.price < 5000) ||
      (priceRange === 'mid' && hotel.price >= 5000 && hotel.price < 10000) ||
      (priceRange === 'luxury' && hotel.price >= 10000);

    return matchesSearch && matchesDistrict && matchesPrice;
  });

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'budget', label: 'Budget (Under ₹5,000)' },
    { id: 'mid', label: 'Mid-range (₹5,000 - ₹10,000)' },
    { id: 'luxury', label: 'Luxury (₹10,000+)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From luxury resorts to cozy guesthouses, discover the best accommodations across Tamil Nadu
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative col-span-1 md:col-span-2">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search hotels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Districts</option>
                {tamilNaduDistricts.map(district => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as 'all' | 'budget' | 'mid' | 'luxury')}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Found <span className="font-semibold text-teal-600">{filteredHotels.length}</span> hotels
          </p>
        </motion.div>

        {/* Hotels List */}
        <div className="space-y-8">
          {filteredHotels.map((hotel, index) => (
            <HotelCard key={hotel.id} hotel={hotel} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No hotels found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search criteria or explore other options</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDistrict('all');
                setPriceRange('all');
              }}
              className="bg-gradient-to-r from-teal-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hotels;