import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Calendar } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const Packages = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const handleBookPackage = (packageId: number) => {
    const pkg = packages.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
      setIsBookingModalOpen(true);
    }
  };

  const handleCreateCustomPackage = () => {
    // Navigate to custom package creation
    console.log('Creating custom package');
    navigate('/destinations');
  };

  const packages = [
    {
      id: 1,
      title: 'Golden Triangle Tamil Nadu',
      description: 'Explore Chennai, Madurai, and Kanyakumari in this comprehensive 7-day journey.',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '7 Days 6 Nights',
      groupSize: '2-6 People',
      rating: 4.8,
      price: 25000,
      highlights: ['Marina Beach Chennai', 'Meenakshi Temple Madurai', 'Sunrise at Kanyakumari', 'Traditional South Indian meals']
    },
    {
      id: 2,
      title: 'Hill Station Paradise',
      description: 'Experience the cool climate and scenic beauty of Ooty and Kodaikanal.',
      image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 Days 4 Nights',
      groupSize: '2-8 People',
      rating: 4.6,
      price: 18000,
      highlights: ['Ooty Lake boating', 'Tea garden tours', 'Kodai Lake', 'Mountain railway ride']
    },
    {
      id: 3,
      title: 'Temple Trail Expedition',
      description: 'Spiritual journey through the most sacred temples of Tamil Nadu.',
      image: 'https://images.pexels.com/photos/14394750/pexels-photo-14394750.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 Days 5 Nights',
      groupSize: '4-10 People',
      rating: 4.9,
      price: 22000,
      highlights: ['Brihadeeswarar Temple Thanjavur', 'Rameswaram Temple', 'Madurai Meenakshi Temple', 'Temple architecture tours']
    },
    {
      id: 4,
      title: 'Coastal Getaway',
      description: 'Relax on pristine beaches and enjoy water sports along Tamil Nadu coast.',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 Days 3 Nights',
      groupSize: '2-6 People',
      rating: 4.5,
      price: 15000,
      highlights: ['Marina Beach', 'Mamallapuram sculptures', 'Beach resorts', 'Seafood cuisine']
    },
    {
      id: 5,
      title: 'Cultural Heritage Tour',
      description: 'Immerse in Tamil culture, arts, and traditional crafts.',
      image: 'https://images.pexels.com/photos/3568506/pexels-photo-3568506.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 Days 7 Nights',
      groupSize: '4-12 People',
      rating: 4.7,
      price: 30000,
      highlights: ['Classical music performances', 'Traditional craft workshops', 'Local cuisine tours', 'Historical museums']
    },
    {
      id: 6,
      title: 'Adventure & Wildlife',
      description: 'Thrilling adventures in national parks and wildlife sanctuaries.',
      image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 Days 4 Nights',
      groupSize: '2-8 People',
      rating: 4.4,
      price: 20000,
      highlights: ['Wildlife safari', 'Trekking trails', 'Bird watching', 'Nature photography']
    }
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
              Travel Packages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Carefully curated experiences that showcase the best of Tamil Nadu's culture, heritage, and natural beauty
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Package Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">
                      ₹{pkg.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                  <button 
                    onClick={() => handleBookPackage(pkg.id)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't find the perfect package?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let us create a customized itinerary just for you! Our travel experts will design 
            a personalized experience based on your interests, budget, and schedule.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Tailored to You</h3>
              <p className="text-white/80">Customized based on your preferences</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-white/80">Competitive rates with no hidden fees</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🤝</div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-white/80">24/7 assistance during your trip</p>
            </div>
          </div>
          <button 
            onClick={handleCreateCustomPackage}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Create Custom Package
          </button>
        </motion.div>
        
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          itemName={selectedPackage?.title || ''}
          itemType="package"
          price={selectedPackage?.price || 0}
        />
      </div>
    </div>
  );
};

export default Packages;