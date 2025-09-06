import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Coffee, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hotel } from '../types';
import BookingModal from './BookingModal';

interface HotelCardProps {
  hotel: Hotel;
  index: number;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, index }) => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'pool': return <Waves className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'restaurant': return <Coffee className="h-4 w-4" />;
      default: return <Coffee className="h-4 w-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            {hotel.available ? (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Available
              </span>
            ) : (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Sold Out
              </span>
            )}
          </div>
        </div>

        <div className="md:w-2/3 p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors mb-1">
                {hotel.name}
              </h3>
              <div className="flex items-center space-x-1 mb-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Tamil Nadu</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 mb-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-700">{hotel.rating}</span>
              </div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {hotel.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
              >
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-teal-600">
                ₹{hotel.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">per night</div>
            </div>
            <button 
              onClick={handleBookNow}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!hotel.available}
            >
              {hotel.available ? 'Book Now' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        itemName={hotel.name}
        itemType="hotel"
        price={hotel.price}
      />
    </motion.div>
  );
};

export default HotelCard;