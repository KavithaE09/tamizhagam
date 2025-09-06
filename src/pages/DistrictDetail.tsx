import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Star, Clock, Users, Camera, Utensils, ShoppingBag, Waves } from 'lucide-react';
import { tamilNaduDistricts } from '../data/tamilNaduData';
import HotelCard from '../components/HotelCard';

const DistrictDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const district = tamilNaduDistricts.find(d => d.id === id);

  const handleBookHotels = () => {
    navigate(`/hotels?district=${id}`);
  };

  const handleCreatePackage = () => {
    navigate('/packages');
  };

  if (!district) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">District Not Found</h1>
          <Link to="/destinations" className="text-teal-600 hover:text-teal-700">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${district.image}')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-orange-900/30"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/destinations" 
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Destinations</span>
              </Link>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {district.name}
              </h1>
              
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>
                    {district.attractions.length > 0 
                      ? (district.attractions.reduce((acc, att) => acc + att.rating, 0) / district.attractions.length).toFixed(1)
                      : '4.5'
                    }
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Overview */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About {district.name}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {district.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                <Camera className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-teal-700">{district.attractions.length}</div>
                <div className="text-sm text-teal-600">Attractions</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <Utensils className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-700">{district.restaurants.length}</div>
                <div className="text-sm text-orange-600">Restaurants</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <ShoppingBag className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-700">{district.malls.length}</div>
                <div className="text-sm text-purple-600">Shopping Centers</div>
              </div>
            </div>
          </motion.section>

          {/* History */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Clock className="h-8 w-8 text-teal-600 mr-3" />
              Historical Background
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {district.history}
            </p>
          </motion.section>

          {/* Attractions */}
          {district.attractions.length > 0 && (
            <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Camera className="h-8 w-8 text-teal-600 mr-3" />
                Top Attractions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {district.attractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{attraction.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{attraction.description}</p>
                      <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                        {attraction.category.replace('-', ' ')}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Beaches */}
          {district.beaches.length > 0 && (
            <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Waves className="h-8 w-8 text-blue-600 mr-3" />
                Beautiful Beaches
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {district.beaches.map((beach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{beach.name}</h3>
                    <p className="text-blue-600 mb-3">Length: {beach.length}</p>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Activities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {beach.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Restaurants */}
          {district.restaurants.length > 0 && (
            <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Utensils className="h-8 w-8 text-orange-600 mr-3" />
                Popular Restaurants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {district.restaurants.map((restaurant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                    <p className="text-orange-600 mb-2">{restaurant.cuisine}</p>
                    <p className="text-gray-600 text-sm mb-3">{restaurant.location}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{restaurant.rating}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Shopping */}
          {district.malls.length > 0 && (
            <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <ShoppingBag className="h-8 w-8 text-purple-600 mr-3" />
                Shopping Centers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {district.malls.map((mall, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{mall.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{mall.location}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{mall.rating}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Hotels */}
          {district.hotels.length > 0 && (
            <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                Recommended Hotels
              </h2>
              <div className="space-y-6">
                {district.hotels.map((hotel, index) => (
                  <HotelCard key={hotel.id} hotel={hotel} index={index} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Call to Action */}
          <motion.section 
            variants={itemVariants}
            className="bg-gradient-to-r from-teal-600 to-orange-500 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Explore {district.name}?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Book your perfect stay and start your unforgettable journey through the cultural treasures 
              and natural beauty of {district.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleBookHotels}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book Hotels Now
              </button>
              <button 
                onClick={handleCreatePackage}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-200"
              >
                Create Custom Package
              </button>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default DistrictDetail;