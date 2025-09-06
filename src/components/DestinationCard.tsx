import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { District } from '../types';

interface DestinationCardProps {
  district: District;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ district, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={district.image}
          alt={district.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {district.attractions.length} Attractions
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
            {district.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-600">
              {district.attractions.length > 0 
                ? (district.attractions.reduce((acc, att) => acc + att.rating, 0) / district.attractions.length).toFixed(1)
                : '4.5'
              }
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {district.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Tamil Nadu</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Hotels from</div>
            <div className="text-lg font-bold text-purple-600">
              ₹{district.hotels.length > 0 
                ? Math.min(...district.hotels.map(h => h.price)).toLocaleString()
                : '3,500'
              }
            </div>
          </div>
        </div>

        <Link 
          to={`/district/${district.id}`}
          className="block w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
        >
          Explore {district.name}
        </Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;