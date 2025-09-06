import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import { tamilNaduDistricts } from '../data/tamilNaduData';
import { MapPin, Star, Users, Award } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const featuredDestinations = tamilNaduDistricts.slice(0, 6);

  const handleExploreAll = () => {
    navigate('/destinations');
  };

  const stats = [
    { icon: <MapPin className="h-8 w-8" />, label: 'Districts Covered', value: '38+' },
    { icon: <Star className="h-8 w-8" />, label: 'Tourist Attractions', value: '500+' },
    { icon: <Users className="h-8 w-8" />, label: 'Happy Travelers', value: '50K+' },
    { icon: <Award className="h-8 w-8" />, label: 'Years Experience', value: '10+' }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most enchanting districts of Tamil Nadu, each offering unique experiences
              from ancient temples to pristine beaches and misty mountains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((district, index) => (
              <DestinationCard key={district.id} district={district} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleExploreAll}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Explore All Destinations
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Your Gateway to 
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Tamil Nadu's Treasures
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tamil Nadu, a land where ancient traditions meet modern aspirations, offers an incredible 
                journey through time. From the architectural marvels of Chola temples to the serene backwaters 
                of Pulicat Lake, every district tells a unique story.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform helps you discover hidden gems, book comfortable accommodations, and create 
                unforgettable memories across all 38 districts of this magnificent state.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
                  <div className="text-sm text-gray-600">Heritage Sites</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-2">300+</div>
                  <div className="text-sm text-gray-600">Partner Hotels</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tamil Nadu Temple"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;