import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Plane, Train, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchData.destination) {
      navigate(`/destinations?search=${encodeURIComponent(searchData.destination)}`);
    } else {
      navigate('/destinations');
    }
  };

  const handleExploreDestinations = () => {
    navigate('/destinations');
  };

  const handleViewPackages = () => {
    navigate('/packages');
  };

  const handleBookHotels = () => {
    navigate('/hotels');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Primary Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3568506/pexels-photo-3568506.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        />
        
        {/* Secondary Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-transparent to-orange-900/30"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-orange-400/20"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Cultural Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`cultural-${i}`}
              className="absolute text-6xl opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {['🕉️', '🏛️', '🌺', '🎭', '📿', '🪔', '🦚', '🥥'][i]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent bg-300% inline-block"
              style={{ backgroundSize: "300% 100%" }}
            >
              Thamizhagam
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-4 font-light"
          >
            <span className="text-teal-300">தமிழகம்</span> - Land of Tamil Heritage
          </motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
        >
          Journey through ancient temples, pristine beaches, misty hill stations, 
          and rich cultural heritage across all 38 districts of Tamil Nadu
        </motion.p>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={handleExploreDestinations}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <MapPin className="h-5 w-5" />
            <span>Explore Destinations</span>
          </motion.button>
          
          <motion.button
            onClick={handleViewPackages}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <Plane className="h-5 w-5" />
            <span>View Packages</span>
          </motion.button>
          
          <motion.button
            onClick={handleBookHotels}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <Users className="h-5 w-5" />
            <span>Book Hotels</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto border border-white/20"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
          >
            Plan Your Perfect Journey
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Choose district..."
                  value={searchData.destination}
                  onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 h-5 w-5" />
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800 transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 h-5 w-5" />
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800 transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 h-5 w-5" />
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({...searchData, guests: Number(e.target.value)})}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-800 appearance-none transition-all duration-300"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} Traveler{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>

          <motion.button
            onClick={handleSearch}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto mt-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
          >
            <Search className="h-6 w-6" />
            <span>Begin Your Adventure</span>
          </motion.button>
        </motion.div>

        {/* Transportation Options */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 flex justify-center space-x-8"
        >
          {[
            { icon: <Plane className="h-6 w-6" />, label: "Flights" },
            { icon: <Train className="h-6 w-6" />, label: "Trains" },
            { icon: <Car className="h-6 w-6" />, label: "Cabs" }
          ].map((transport, index) => (
            <motion.div
              key={transport.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                {transport.icon}
              </div>
              <span className="text-sm font-medium">{transport.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div 
            className="w-2 h-4 bg-gradient-to-b from-teal-400 to-orange-400 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-center text-sm mt-2 opacity-70">Scroll to explore</p>
      </motion.div>
    </div>
  );
};

export default Hero;