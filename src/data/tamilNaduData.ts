import { District } from '../types';

export const tamilNaduDistricts: District[] = [
  {
    id: 'chennai',
    name: 'Chennai',
    description: 'The vibrant capital city, gateway to South India with rich culture and modern amenities.',
    image: 'https://images.pexels.com/photos/7746043/pexels-photo-7746043.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Chennai, formerly known as Madras, was established in 1639 by the British East India Company. The city has evolved from a small fishing village called Madraspatnam to become the cultural and economic capital of South India. It served as the winter capital of the Madras Presidency during British rule and has been a major center for Tamil literature, music, and dance.',
    attractions: [
      {
        id: 'marina-beach',
        name: 'Marina Beach',
        description: 'World\'s second-longest urban beach with golden sands and vibrant street life.',
        image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'beach',
        rating: 4.3,
        districtId: 'chennai'
      },
      {
        id: 'kapaleeshwarar-temple',
        name: 'Kapaleeshwarar Temple',
        description: 'Ancient Dravidian architecture temple dedicated to Lord Shiva in Mylapore.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.5,
        districtId: 'chennai'
      },
      {
        id: 'fort-st-george',
        name: 'Fort St. George',
        description: 'Historic British fort and museum showcasing colonial heritage.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.2,
        districtId: 'chennai'
      }
    ],
    malls: [
      { name: 'Express Avenue', location: 'Royapettah', rating: 4.4 },
      { name: 'Phoenix MarketCity', location: 'Velachery', rating: 4.5 },
      { name: 'Forum Vijaya Mall', location: 'Vadapalani', rating: 4.3 }
    ],
    restaurants: [
      { name: 'Dakshin', cuisine: 'South Indian', location: 'ITC Grand Chola', rating: 4.6 },
      { name: 'Murugan Idli Shop', cuisine: 'Tamil Breakfast', location: 'Multiple locations', rating: 4.4 },
      { name: 'Saravana Bhavan', cuisine: 'Vegetarian', location: 'Multiple locations', rating: 4.3 }
    ],
    beaches: [
      { name: 'Marina Beach', length: '13 km', activities: ['Walking', 'Horse riding', 'Food stalls'] },
      { name: 'Elliot\'s Beach', length: '2 km', activities: ['Swimming', 'Surfing', 'Beach volleyball'] },
      { name: 'Covelong Beach', length: '1.5 km', activities: ['Water sports', 'Fishing', 'Boating'] }
    ],
    hotels: [
      {
        id: 'taj-chennai',
        name: 'The Taj Chennai',
        description: 'Luxury hotel with stunning sea views and world-class amenities.',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 8500,
        rating: 4.7,
        amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym'],
        districtId: 'chennai',
        available: true
      }
    ]
  },
  {
    id: 'madurai',
    name: 'Madurai',
    description: 'The temple city known for the magnificent Meenakshi Temple and rich cultural heritage.',
    image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Madurai, one of the oldest continuously inhabited cities in the world, has a history spanning over 2500 years. Known as the "Athens of the East," it was the capital of the Pandyan Kingdom and later ruled by various dynasties including the Cholas, Vijayanagara Empire, and the Nayaks. The city is famous for its rich Tamil culture and literature.',
    attractions: [
      {
        id: 'meenakshi-temple',
        name: 'Meenakshi Amman Temple',
        description: 'Historic Hindu temple with stunning Dravidian architecture and intricate sculptures.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.8,
        districtId: 'madurai'
      },
      {
        id: 'thirumalai-nayakkar-palace',
        name: 'Thirumalai Nayakkar Palace',
        description: 'Indo-Saracenic architectural marvel built by King Thirumalai Nayak.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.4,
        districtId: 'madurai'
      }
    ],
    malls: [
      { name: 'Vishaal De Mall', location: 'Anna Nagar', rating: 4.2 },
      { name: 'The Forum Celebration Mall', location: 'Alwarpuram', rating: 4.1 }
    ],
    restaurants: [
      { name: 'Murugan Idli Shop', cuisine: 'South Indian', location: 'SS Colony', rating: 4.5 },
      { name: 'Konar Mess', cuisine: 'Non-Vegetarian', location: 'Town Hall Road', rating: 4.3 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'heritage-madurai',
        name: 'Heritage Madurai',
        description: 'Luxury heritage hotel near the famous Meenakshi Temple.',
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 6500,
        rating: 4.5,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Room Service'],
        districtId: 'madurai',
        available: true
      }
    ]
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore',
    description: 'Manchester of South India, known for textiles, hill stations nearby, and temples.',
    image: 'https://images.pexels.com/photos/7746043/pexels-photo-7746043.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Coimbatore, known as the "Manchester of South India," has been a major textile and industrial hub since the British era. The city was ruled by various dynasties including the Cheras, Cholas, and later the Mysore Kingdom. It played a significant role in India\'s freedom struggle and has evolved into a major IT and manufacturing center.',
    attractions: [
      {
        id: 'marudhamalai-temple',
        name: 'Marudhamalai Temple',
        description: 'Hilltop temple dedicated to Lord Murugan with scenic views.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.4,
        districtId: 'coimbatore'
      },
      {
        id: 'isha-yoga-center',
        name: 'Isha Yoga Center',
        description: 'Spiritual center founded by Sadhguru with the famous Adiyogi statue.',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'cultural',
        rating: 4.7,
        districtId: 'coimbatore'
      }
    ],
    malls: [
      { name: 'Brookefields Mall', location: 'Saibaba Colony', rating: 4.3 },
      { name: 'Fun Republic Mall', location: 'Peelamedu', rating: 4.2 }
    ],
    restaurants: [
      { name: 'Annapoorna', cuisine: 'South Indian', location: 'Multiple locations', rating: 4.4 },
      { name: 'Shree Anandhaas', cuisine: 'Vegetarian', location: 'RS Puram', rating: 4.3 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'vivanta-coimbatore',
        name: 'Vivanta Coimbatore',
        description: 'Modern business hotel with excellent connectivity and amenities.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 7500,
        rating: 4.4,
        amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Business Center'],
        districtId: 'coimbatore',
        available: true
      }
    ]
  },
  {
    id: 'salem',
    name: 'Salem',
    description: 'Steel city known for its industrial growth and scenic hill stations nearby.',
    image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Salem, known as the "Steel City" of Tamil Nadu, has a rich history dating back to the Sangam period. The city was ruled by various dynasties including the Cheras, Cholas, and later Hyder Ali and Tipu Sultan. It became an important center during British rule and is now known for its steel, textiles, and silver ornaments.',
    attractions: [
      {
        id: 'yercaud',
        name: 'Yercaud Hill Station',
        description: 'Beautiful hill station known as the "Jewel of the South" with coffee plantations.',
        image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'hill-station',
        rating: 4.5,
        districtId: 'salem'
      }
    ],
    malls: [
      { name: 'Reliance Mall', location: 'Junction', rating: 4.0 },
      { name: 'Salem City Center', location: 'Fairlands', rating: 3.9 }
    ],
    restaurants: [
      { name: 'Hotel Selvam', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.2 },
      { name: 'Vasantha Bhavan', cuisine: 'Vegetarian', location: 'Junction', rating: 4.1 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-salem',
        name: 'Hotel Salem',
        description: 'Comfortable stay in the heart of the steel city.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3500,
        rating: 4.0,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Parking'],
        districtId: 'salem',
        available: true
      }
    ]
  },
  {
    id: 'tiruchirappalli',
    name: 'Tiruchirappalli (Trichy)',
    description: 'Historic city with ancient temples and the famous Rock Fort.',
    image: 'https://images.pexels.com/photos/14394750/pexels-photo-14394750.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Tiruchirappalli, commonly known as Trichy, has been a major center of Tamil culture and politics for centuries. The city was the capital of the early Cholas and later ruled by the Pallavas, Pandyas, and Vijayanagara Empire. The famous Rock Fort Temple stands as a testament to its rich architectural heritage.',
    attractions: [
      {
        id: 'rock-fort-temple',
        name: 'Rock Fort Temple',
        description: 'Ancient temple complex built on a massive rock formation.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.6,
        districtId: 'tiruchirappalli'
      }
    ],
    malls: [
      { name: 'Femina Shopping Mall', location: 'Thillai Nagar', rating: 4.1 }
    ],
    restaurants: [
      { name: 'Sangam Hotel', cuisine: 'South Indian', location: 'Collector Office Road', rating: 4.3 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-trichy',
        name: 'Hotel Trichy',
        description: 'Heritage hotel near the famous Rock Fort.',
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4500,
        rating: 4.2,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'tiruchirappalli',
        available: true
      }
    ]
  },
  {
    id: 'tirunelveli',
    name: 'Tirunelveli',
    description: 'Ancient city known for its temples, halwa, and proximity to Western Ghats.',
    image: 'https://images.pexels.com/photos/14394750/pexels-photo-14394750.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Tirunelveli, one of the oldest cities in Tamil Nadu, has a history spanning over 2000 years. It was an important center during the Pandyan rule and later became a significant town during the British period. The city is famous for its temples, traditional sweets, and as the birthplace of many freedom fighters.',
    attractions: [
      {
        id: 'nellaiappar-temple',
        name: 'Nellaiappar Temple',
        description: 'Ancient temple complex dedicated to Lord Shiva with magnificent architecture.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.5,
        districtId: 'tirunelveli'
      }
    ],
    malls: [
      { name: 'Tirunelveli Shopping Complex', location: 'Town', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Iruttu Kadai Halwa', cuisine: 'Sweets', location: 'Iruttu Kadai', rating: 4.7 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-tirunelveli',
        name: 'Hotel Tirunelveli',
        description: 'Comfortable accommodation in the temple city.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3000,
        rating: 4.0,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'tirunelveli',
        available: true
      }
    ]
  },
  {
    id: 'vellore',
    name: 'Vellore',
    description: 'Historic fort city known for Vellore Fort and medical education.',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Vellore has a rich history dating back to the Chola period. The city gained prominence during the Vijayanagara Empire and later under Tipu Sultan, who was imprisoned in the famous Vellore Fort. Today, it\'s known for the Christian Medical College and as an educational hub.',
    attractions: [
      {
        id: 'vellore-fort',
        name: 'Vellore Fort',
        description: 'Historic fort built in 1566 with museums and temples inside.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.3,
        districtId: 'vellore'
      }
    ],
    malls: [
      { name: 'VIT Square Mall', location: 'Katpadi', rating: 4.0 }
    ],
    restaurants: [
      { name: 'Darling Restaurant', cuisine: 'Multi-cuisine', location: 'Officer\'s Line', rating: 4.2 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-vellore',
        name: 'Hotel Vellore',
        description: 'Modern hotel near the historic fort.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4000,
        rating: 4.1,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Parking'],
        districtId: 'vellore',
        available: true
      }
    ]
  },
  {
    id: 'erode',
    name: 'Erode',
    description: 'Textile hub known for handloom and turmeric cultivation.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Erode, situated on the banks of River Kaveri, has been an important trading center since ancient times. The city was ruled by various dynasties and became prominent during the British period for its textile industry. It\'s also known as the "Turmeric City" of India.',
    attractions: [
      {
        id: 'thindal-murugan-temple',
        name: 'Thindal Murugan Temple',
        description: 'Hilltop temple dedicated to Lord Murugan with panoramic views.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.2,
        districtId: 'erode'
      }
    ],
    malls: [
      { name: 'Brookefields Mall', location: 'Perundurai Road', rating: 4.1 }
    ],
    restaurants: [
      { name: 'Hotel Vellalar', cuisine: 'South Indian', location: 'Brough Road', rating: 4.0 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-erode',
        name: 'Hotel Erode',
        description: 'Business hotel in the textile city.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3500,
        rating: 3.9,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'erode',
        available: true
      }
    ]
  },
  {
    id: 'tiruppur',
    name: 'Tiruppur',
    description: 'Knitwear capital of India, major textile export hub.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Tiruppur, known as the "Knitwear Capital of India," transformed from a small town to a major industrial city in the late 20th century. The city\'s growth is attributed to its textile and garment industry, making it one of the major export hubs in India.',
    attractions: [
      {
        id: 'tiruppur-kumaran-statue',
        name: 'Tiruppur Kumaran Memorial',
        description: 'Memorial dedicated to the freedom fighter Tiruppur Kumaran.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.0,
        districtId: 'tiruppur'
      }
    ],
    malls: [
      { name: 'City Center Mall', location: 'Palladam Road', rating: 4.0 }
    ],
    restaurants: [
      { name: 'Anjappar', cuisine: 'Chettinad', location: 'Avinashi Road', rating: 4.3 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-tiruppur',
        name: 'Hotel Tiruppur',
        description: 'Business hotel in the knitwear capital.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4000,
        rating: 4.0,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Business Center'],
        districtId: 'tiruppur',
        available: true
      }
    ]
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    description: 'Land of temples and classical arts, home to the magnificent Brihadeeswarar Temple.',
    image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Thanjavur, the ancient capital of the Chola Empire, is renowned for its rich cultural heritage and architectural marvels. The city reached its zenith during the reign of Raja Raja Chola I, who built the magnificent Brihadeeswarar Temple. It\'s also famous for Tanjore paintings and classical music.',
    attractions: [
      {
        id: 'brihadeeswarar-temple',
        name: 'Brihadeeswarar Temple',
        description: 'UNESCO World Heritage Site and architectural marvel of Chola dynasty.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.9,
        districtId: 'thanjavur'
      },
      {
        id: 'thanjavur-palace',
        name: 'Thanjavur Maratha Palace',
        description: 'Historic palace complex with art gallery and library.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.4,
        districtId: 'thanjavur'
      }
    ],
    malls: [
      { name: 'Thanjavur Shopping Complex', location: 'Gandhi Road', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Sathars', cuisine: 'South Indian', location: 'Gandhi Road', rating: 4.2 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'ideal-river-view-thanjavur',
        name: 'Ideal River View Resort',
        description: 'Peaceful resort with traditional architecture and modern comfort.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 5500,
        rating: 4.3,
        amenities: ['WiFi', 'River View', 'Restaurant', 'Garden'],
        districtId: 'thanjavur',
        available: true
      }
    ]
  },
  {
    id: 'kanyakumari',
    name: 'Kanyakumari',
    description: 'Land\'s end of India where three seas meet, famous for sunrise and sunset views.',
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Kanyakumari, the southernmost tip of mainland India, has been a significant pilgrimage site since ancient times. The town is named after the goddess Kanyakumari (Devi Kanya Kumari), an incarnation of Goddess Parvati. It holds great religious and cultural significance and was an important center during various South Indian dynasties.',
    attractions: [
      {
        id: 'vivekananda-rock',
        name: 'Vivekananda Rock Memorial',
        description: 'Memorial built on a rock where Swami Vivekananda meditated.',
        image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.7,
        districtId: 'kanyakumari'
      },
      {
        id: 'thiruvalluvar-statue',
        name: 'Thiruvalluvar Statue',
        description: '133-foot tall statue of the famous Tamil poet and philosopher.',
        image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.6,
        districtId: 'kanyakumari'
      }
    ],
    malls: [
      { name: 'Kanyakumari Shopping Center', location: 'Main Road', rating: 3.7 }
    ],
    restaurants: [
      { name: 'Sea View Restaurant', cuisine: 'Seafood', location: 'Beach Road', rating: 4.4 }
    ],
    beaches: [
      { name: 'Kanyakumari Beach', length: '2 km', activities: ['Sunrise viewing', 'Sunset viewing', 'Photography'] }
    ],
    hotels: [
      {
        id: 'sea-view-kanyakumari',
        name: 'Sea View Hotel',
        description: 'Comfortable stay with stunning views of the confluence point.',
        image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4500,
        rating: 4.2,
        amenities: ['WiFi', 'Sea View', 'Restaurant', 'AC'],
        districtId: 'kanyakumari',
        available: true
      }
    ]
  },
  {
    id: 'nilgiris',
    name: 'The Nilgiris (Ooty)',
    description: 'Queen of Hill Stations with cool climate, tea gardens, and scenic mountain views.',
    image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'The Nilgiris, meaning "Blue Mountains," was originally inhabited by tribal communities. The British developed Ooty (Udhagamandalam) as a summer retreat in the 19th century. The region became famous for its tea plantations, colonial architecture, and pleasant climate, earning the title "Queen of Hill Stations."',
    attractions: [
      {
        id: 'ooty-lake',
        name: 'Ooty Lake',
        description: 'Picturesque artificial lake surrounded by eucalyptus trees and hills.',
        image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'hill-station',
        rating: 4.4,
        districtId: 'nilgiris'
      },
      {
        id: 'botanical-gardens',
        name: 'Government Botanical Gardens',
        description: 'Beautiful gardens with rare plant species and fossil tree trunk.',
        image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'hill-station',
        rating: 4.3,
        districtId: 'nilgiris'
      }
    ],
    malls: [
      { name: 'Ooty Main Bazaar', location: 'Commercial Street', rating: 4.0 }
    ],
    restaurants: [
      { name: 'Earl\'s Secret', cuisine: 'Continental', location: 'Kings Cliff Hotel', rating: 4.5 },
      { name: 'Hyderabad Biryani House', cuisine: 'Biryani', location: 'Commercial Street', rating: 4.2 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'taj-savoy-ooty',
        name: 'Taj Savoy Hotel',
        description: 'Colonial charm meets modern luxury in the heart of Ooty.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 9500,
        rating: 4.6,
        amenities: ['WiFi', 'Fireplace', 'Restaurant', 'Garden', 'Spa'],
        districtId: 'nilgiris',
        available: true
      }
    ]
  },
  // Adding more districts to reach 38 total
  {
    id: 'dindigul',
    name: 'Dindigul',
    description: 'Famous for its locks, leather goods, and the historic Dindigul Fort.',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Dindigul has a rich history dating back to the 1st century BC. The city was ruled by various dynasties including the Cheras, Cholas, Pandyas, and later Hyder Ali and Tipu Sultan. The famous Dindigul Fort was built by Madurai Nayaks and later fortified by Hyder Ali.',
    attractions: [
      {
        id: 'dindigul-fort',
        name: 'Dindigul Fort',
        description: 'Historic hilltop fort offering panoramic views of the city.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.2,
        districtId: 'dindigul'
      }
    ],
    malls: [
      { name: 'Dindigul Shopping Complex', location: 'Anna Nagar', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Thalappakatti Restaurant', cuisine: 'Biryani', location: 'Multiple locations', rating: 4.5 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-dindigul',
        name: 'Hotel Dindigul',
        description: 'Comfortable accommodation in the lock city.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3200,
        rating: 4.0,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'dindigul',
        available: true
      }
    ]
  },
  {
    id: 'karur',
    name: 'Karur',
    description: 'Textile hub known for home textiles and handloom products.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Karur, one of the oldest towns in Tamil Nadu, was the capital of the Chera dynasty. The city has been a major center for trade and commerce since ancient times, particularly known for its textile industry and handloom products.',
    attractions: [
      {
        id: 'kalyana-pasupatheeswarar-temple',
        name: 'Kalyana Pasupatheeswarar Temple',
        description: 'Ancient temple dedicated to Lord Shiva with beautiful architecture.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.3,
        districtId: 'karur'
      }
    ],
    malls: [
      { name: 'Karur Textile Mall', location: 'Thanthoni Road', rating: 3.9 }
    ],
    restaurants: [
      { name: 'Hotel Gowri Shankar', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.1 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-karur',
        name: 'Hotel Karur',
        description: 'Business hotel in the textile town.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3000,
        rating: 3.9,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'karur',
        available: true
      }
    ]
  },
  {
    id: 'namakkal',
    name: 'Namakkal',
    description: 'Known for poultry farming, egg production, and the famous Namakkal Fort.',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Namakkal derives its name from "Namakal" meaning "salt rock." The town has historical significance with its ancient fort and temples. It has evolved into a major center for poultry farming and is known as the "Egg City" of South India.',
    attractions: [
      {
        id: 'namakkal-fort',
        name: 'Namakkal Fort',
        description: 'Historic fort with ancient temples and rock-cut architecture.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.1,
        districtId: 'namakkal'
      }
    ],
    malls: [
      { name: 'Namakkal Shopping Center', location: 'Paramathi Road', rating: 3.7 }
    ],
    restaurants: [
      { name: 'Hotel Selvam', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.0 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-namakkal',
        name: 'Hotel Namakkal',
        description: 'Comfortable stay in the egg city.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 2800,
        rating: 3.8,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'namakkal',
        available: true
      }
    ]
  },
  {
    id: 'dharmapuri',
    name: 'Dharmapuri',
    description: 'Border district known for mango cultivation and sericulture.',
    image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Dharmapuri, located on the border with Karnataka, has been an important region since ancient times. The district is known for its agricultural activities, particularly mango cultivation and sericulture. It played a role in various historical events and freedom struggle.',
    attractions: [
      {
        id: 'hogenakkal-falls',
        name: 'Hogenakkal Falls',
        description: 'Spectacular waterfalls on River Kaveri, known as "Niagara of India."',
        image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'wildlife',
        rating: 4.5,
        districtId: 'dharmapuri'
      }
    ],
    malls: [
      { name: 'Dharmapuri Shopping Complex', location: 'Collectorate Road', rating: 3.6 }
    ],
    restaurants: [
      { name: 'Hotel Tamil Nadu', cuisine: 'South Indian', location: 'Bus Stand', rating: 3.9 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-dharmapuri',
        name: 'Hotel Dharmapuri',
        description: 'Peaceful stay near Hogenakkal Falls.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 2500,
        rating: 3.7,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'dharmapuri',
        available: true
      }
    ]
  },
  {
    id: 'krishnagiri',
    name: 'Krishnagiri',
    description: 'Known for mango cultivation and proximity to Bangalore.',
    image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Krishnagiri, meaning "Krishna\'s Hill," is named after the hilltop fort built by Hyder Ali. The district has been an important region for agriculture and trade, particularly known for its mango cultivation and proximity to major IT hubs.',
    attractions: [
      {
        id: 'krishnagiri-dam',
        name: 'Krishnagiri Dam',
        description: 'Scenic dam and reservoir perfect for picnics and boating.',
        image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'wildlife',
        rating: 4.0,
        districtId: 'krishnagiri'
      }
    ],
    malls: [
      { name: 'Krishnagiri Mall', location: 'Hosur Road', rating: 3.8 }
    ],
    restaurants: [
      { name: 'A2B Restaurant', cuisine: 'South Indian', location: 'Hosur Road', rating: 4.2 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-krishnagiri',
        name: 'Hotel Krishnagiri',
        description: 'Modern hotel on the IT corridor.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3500,
        rating: 4.0,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Business Center'],
        districtId: 'krishnagiri',
        available: true
      }
    ]
  },
  {
    id: 'cuddalore',
    name: 'Cuddalore',
    description: 'Coastal district with beautiful beaches and historical significance.',
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Cuddalore has a rich maritime history and was an important port during the colonial period. The town witnessed several battles between European powers and played a significant role in South Indian history.',
    attractions: [
      {
        id: 'silver-beach',
        name: 'Silver Beach',
        description: 'Beautiful beach with silver sand and clear waters.',
        image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'beach',
        rating: 4.2,
        districtId: 'cuddalore'
      }
    ],
    malls: [
      { name: 'Cuddalore Shopping Center', location: 'Thirupapuliyur', rating: 3.7 }
    ],
    restaurants: [
      { name: 'Sea Shell Restaurant', cuisine: 'Seafood', location: 'Silver Beach', rating: 4.3 }
    ],
    beaches: [
      { name: 'Silver Beach', length: '3 km', activities: ['Swimming', 'Beach volleyball', 'Photography'] }
    ],
    hotels: [
      {
        id: 'hotel-cuddalore',
        name: 'Hotel Cuddalore',
        description: 'Beachside hotel with sea views.',
        image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4000,
        rating: 4.1,
        amenities: ['WiFi', 'Sea View', 'Restaurant', 'AC'],
        districtId: 'cuddalore',
        available: true
      }
    ]
  },
  {
    id: 'villupuram',
    name: 'Villupuram',
    description: 'Important railway junction and gateway to Pondicherry.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Villupuram has been an important transportation hub since the British era. The town serves as a major railway junction connecting various parts of Tamil Nadu and is the gateway to the union territory of Pondicherry.',
    attractions: [
      {
        id: 'gingee-fort',
        name: 'Gingee Fort',
        description: 'Massive hilltop fort complex known as "Troy of the East."',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.4,
        districtId: 'villupuram'
      }
    ],
    malls: [
      { name: 'Villupuram Shopping Mall', location: 'Mundiyampakkam', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Hotel Saravana Bhavan', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.1 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-villupuram',
        name: 'Hotel Villupuram',
        description: 'Convenient stay near railway junction.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3000,
        rating: 3.9,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'villupuram',
        available: true
      }
    ]
  },
  {
    id: 'tiruvannamalai',
    name: 'Tiruvannamalai',
    description: 'Sacred city known for Arunachaleswarar Temple and spiritual significance.',
    image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Tiruvannamalai is one of the most sacred cities in Tamil Nadu, known for the Arunachaleswarar Temple dedicated to Lord Shiva. The city has been a major pilgrimage center for centuries and is associated with various saints and spiritual leaders.',
    attractions: [
      {
        id: 'arunachaleswarar-temple',
        name: 'Arunachaleswarar Temple',
        description: 'One of the largest temples in India dedicated to Lord Shiva.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.8,
        districtId: 'tiruvannamalai'
      }
    ],
    malls: [
      { name: 'Tiruvannamalai Shopping Complex', location: 'Car Street', rating: 3.9 }
    ],
    restaurants: [
      { name: 'Ramana Restaurant', cuisine: 'South Indian', location: 'Ramana Nagar', rating: 4.2 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-tiruvannamalai',
        name: 'Hotel Tiruvannamalai',
        description: 'Spiritual retreat near the sacred mountain.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3500,
        rating: 4.1,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Temple View'],
        districtId: 'tiruvannamalai',
        available: true
      }
    ]
  },
  {
    id: 'kanchipuram',
    name: 'Kanchipuram',
    description: 'City of thousand temples and famous for silk sarees.',
    image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Kanchipuram, one of the seven sacred cities of Hinduism, was the capital of the Pallava dynasty. The city is renowned for its temples, silk weaving industry, and as a center of learning and culture for over a millennium.',
    attractions: [
      {
        id: 'kailasanathar-temple',
        name: 'Kailasanathar Temple',
        description: 'Oldest temple in Kanchipuram built by the Pallavas.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.6,
        districtId: 'kanchipuram'
      }
    ],
    malls: [
      { name: 'Kanchi Silk Saree Center', location: 'Gandhi Road', rating: 4.2 }
    ],
    restaurants: [
      { name: 'Hotel Saravana Bhavan', cuisine: 'South Indian', location: 'Railway Station Road', rating: 4.3 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-kanchipuram',
        name: 'Hotel Kanchipuram',
        description: 'Heritage hotel in the temple city.',
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4500,
        rating: 4.2,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Cultural Programs'],
        districtId: 'kanchipuram',
        available: true
      }
    ]
  },
  {
    id: 'tiruvallur',
    name: 'Tiruvallur',
    description: 'Industrial district near Chennai with temples and lakes.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Tiruvallur has historical significance dating back to the Pallava period. The district has evolved into an important industrial area near Chennai while maintaining its cultural heritage through ancient temples and traditional practices.',
    attractions: [
      {
        id: 'veeraraghavar-temple',
        name: 'Veeraraghavar Temple',
        description: 'Ancient Vishnu temple with beautiful architecture.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.3,
        districtId: 'tiruvallur'
      }
    ],
    malls: [
      { name: 'Tiruvallur Shopping Center', location: 'Collectorate Road', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Anjappar', cuisine: 'Chettinad', location: 'Poonamallee High Road', rating: 4.4 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-tiruvallur',
        name: 'Hotel Tiruvallur',
        description: 'Business hotel near Chennai.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4000,
        rating: 4.0,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Business Center'],
        districtId: 'tiruvallur',
        available: true
      }
    ]
  },
  {
    id: 'kancheepuram',
    name: 'Kancheepuram',
    description: 'Satellite city of Chennai known for IT companies and educational institutions.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Kancheepuram district was formed in 1997 and has rapidly developed as an extension of Chennai. The area has become a major IT hub and educational center while preserving its cultural heritage.',
    attractions: [
      {
        id: 'vedanthangal-bird-sanctuary',
        name: 'Vedanthangal Bird Sanctuary',
        description: 'Oldest water bird sanctuary in India with migratory birds.',
        image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'wildlife',
        rating: 4.2,
        districtId: 'kancheepuram'
      }
    ],
    malls: [
      { name: 'Phoenix MarketCity', location: 'Velachery', rating: 4.5 }
    ],
    restaurants: [
      { name: 'Copper Chimney', cuisine: 'North Indian', location: 'OMR', rating: 4.3 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-kancheepuram-it',
        name: 'Hotel IT Park',
        description: 'Modern hotel in the IT corridor.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 5500,
        rating: 4.3,
        amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Business Center'],
        districtId: 'kancheepuram',
        available: true
      }
    ]
  },
  {
    id: 'nagapattinam',
    name: 'Nagapattinam',
    description: 'Coastal district known for Velankanni Church and fishing industry.',
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Nagapattinam has been an important port city since ancient times, serving as a major center for trade with Southeast Asia. The district is known for its religious diversity and the famous Velankanni Basilica.',
    attractions: [
      {
        id: 'velankanni-church',
        name: 'Basilica of Our Lady of Good Health',
        description: 'Famous Catholic pilgrimage site known as "Lourdes of the East."',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.7,
        districtId: 'nagapattinam'
      }
    ],
    malls: [
      { name: 'Nagapattinam Shopping Complex', location: 'VOC Road', rating: 3.7 }
    ],
    restaurants: [
      { name: 'Hotel Picnic', cuisine: 'Seafood', location: 'Velankanni', rating: 4.2 }
    ],
    beaches: [
      { name: 'Velankanni Beach', length: '2 km', activities: ['Pilgrimage', 'Photography', 'Beach walks'] }
    ],
    hotels: [
      {
        id: 'hotel-nagapattinam',
        name: 'Hotel Nagapattinam',
        description: 'Pilgrimage hotel near Velankanni Church.',
        image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3500,
        rating: 4.1,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Pilgrimage Services'],
        districtId: 'nagapattinam',
        available: true
      }
    ]
  },
  {
    id: 'thiruvarur',
    name: 'Thiruvarur',
    description: 'Cultural center known for Carnatic music and ancient temples.',
    image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Thiruvarur is renowned as the birthplace of Saint Tyagaraja, one of the trinity of Carnatic music. The town has a rich cultural heritage and is famous for its temples and classical music tradition.',
    attractions: [
      {
        id: 'thyagaraja-temple',
        name: 'Thyagarajaswamy Temple',
        description: 'Ancient temple dedicated to Lord Shiva with musical significance.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.5,
        districtId: 'thiruvarur'
      }
    ],
    malls: [
      { name: 'Thiruvarur Shopping Center', location: 'South Street', rating: 3.6 }
    ],
    restaurants: [
      { name: 'Hotel Gnanam', cuisine: 'South Indian', location: 'Big Street', rating: 4.0 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-thiruvarur',
        name: 'Hotel Thiruvarur',
        description: 'Cultural hotel in the music capital.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3000,
        rating: 3.9,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Cultural Programs'],
        districtId: 'thiruvarur',
        available: true
      }
    ]
  },
  {
    id: 'pudukkottai',
    name: 'Pudukkottai',
    description: 'Former princely state known for archaeological sites and palaces.',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Pudukkottai was a princely state ruled by the Thondaiman dynasty. The region is rich in archaeological sites and has a unique cultural heritage that blends Tamil and Maratha influences.',
    attractions: [
      {
        id: 'thirumayam-fort',
        name: 'Thirumayam Fort',
        description: 'Historic fort built by Raja Vijaya Raghunatha Thondaiman.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.2,
        districtId: 'pudukkottai'
      }
    ],
    malls: [
      { name: 'Pudukkottai Shopping Mall', location: 'Trichy Road', rating: 3.7 }
    ],
    restaurants: [
      { name: 'Hotel Sangam', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.0 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-pudukkottai',
        name: 'Hotel Pudukkottai',
        description: 'Heritage hotel in the former princely state.',
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3200,
        rating: 3.9,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Heritage Tours'],
        districtId: 'pudukkottai',
        available: true
      }
    ]
  },
  {
    id: 'sivaganga',
    name: 'Sivaganga',
    description: 'Historic district known for freedom fighters and ancient temples.',
    image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Sivaganga has a proud history of resistance against British rule, particularly under the leadership of Marudhu Pandiyar brothers and Velu Nachiyar. The district is known for its brave freedom fighters and cultural heritage.',
    attractions: [
      {
        id: 'kalayarkoil-temple',
        name: 'Kalayarkoil Temple',
        description: 'Ancient temple complex with beautiful Dravidian architecture.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.3,
        districtId: 'sivaganga'
      }
    ],
    malls: [
      { name: 'Sivaganga Shopping Center', location: 'Collectorate Road', rating: 3.6 }
    ],
    restaurants: [
      { name: 'Hotel Pandian', cuisine: 'South Indian', location: 'Bus Stand', rating: 3.9 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-sivaganga',
        name: 'Hotel Sivaganga',
        description: 'Historic hotel in the freedom fighters\' land.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 2800,
        rating: 3.8,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'sivaganga',
        available: true
      }
    ]
  },
  {
    id: 'ramanathapuram',
    name: 'Ramanathapuram',
    description: 'Coastal district famous for Rameswaram temple and Pamban Bridge.',
    image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Ramanathapuram has immense religious significance as it houses the famous Ramanathaswamy Temple in Rameswaram. The district has been an important pilgrimage center and has connections to the Ramayana epic.',
    attractions: [
      {
        id: 'ramanathaswamy-temple',
        name: 'Ramanathaswamy Temple',
        description: 'One of the twelve Jyotirlinga temples with the longest corridor in the world.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.8,
        districtId: 'ramanathapuram'
      },
      {
        id: 'pamban-bridge',
        name: 'Pamban Bridge',
        description: 'India\'s first sea bridge connecting Rameswaram to mainland.',
        image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.5,
        districtId: 'ramanathapuram'
      }
    ],
    malls: [
      { name: 'Rameswaram Shopping Complex', location: 'East Car Street', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Hotel Tamil Nadu', cuisine: 'South Indian', location: 'Rameswaram', rating: 4.1 }
    ],
    beaches: [
      { name: 'Dhanushkodi Beach', length: '5 km', activities: ['Pilgrimage', 'Photography', 'Sunset viewing'] }
    ],
    hotels: [
      {
        id: 'hotel-ramanathapuram',
        name: 'Hotel Ramanathapuram',
        description: 'Pilgrimage hotel near the sacred temple.',
        image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4000,
        rating: 4.2,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Pilgrimage Services'],
        districtId: 'ramanathapuram',
        available: true
      }
    ]
  },
  {
    id: 'virudhunagar',
    name: 'Virudhunagar',
    description: 'Industrial town known for fireworks, matches, and printing industry.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Virudhunagar, formerly known as Virudupatti, is famous for its fireworks and match industry. The town has been a major industrial center and is known for its entrepreneurial spirit and business community.',
    attractions: [
      {
        id: 'arulmigu-subramanya-swamy-temple',
        name: 'Arulmigu Subramanya Swamy Temple',
        description: 'Ancient temple dedicated to Lord Murugan with beautiful architecture.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.2,
        districtId: 'virudhunagar'
      }
    ],
    malls: [
      { name: 'Virudhunagar Shopping Mall', location: 'Madurai Road', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Hotel Gowri Shankar', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.0 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-virudhunagar',
        name: 'Hotel Virudhunagar',
        description: 'Business hotel in the fireworks city.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3200,
        rating: 3.9,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Business Center'],
        districtId: 'virudhunagar',
        available: true
      }
    ]
  },
  {
    id: 'theni',
    name: 'Theni',
    description: 'Hill district known for cardamom cultivation and scenic beauty.',
    image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Theni, carved out from Madurai district, is known for its agricultural activities, particularly cardamom and other spice cultivation. The district is blessed with scenic beauty and is a gateway to Kerala.',
    attractions: [
      {
        id: 'meghamalai',
        name: 'Meghamalai',
        description: 'Hill station known as "High Wavy Mountains" with tea estates.',
        image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'hill-station',
        rating: 4.4,
        districtId: 'theni'
      }
    ],
    malls: [
      { name: 'Theni Shopping Center', location: 'Periyakulam Road', rating: 3.7 }
    ],
    restaurants: [
      { name: 'Hotel Pandian', cuisine: 'South Indian', location: 'Bus Stand', rating: 4.1 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-theni',
        name: 'Hotel Theni',
        description: 'Hill station hotel with mountain views.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 3800,
        rating: 4.0,
        amenities: ['WiFi', 'Mountain View', 'Restaurant', 'AC'],
        districtId: 'theni',
        available: true
      }
    ]
  },
  {
    id: 'thoothukudi',
    name: 'Thoothukudi (Tuticorin)',
    description: 'Major port city known for salt production and pearl fishing.',
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Thoothukudi, also known as Tuticorin, has been an important port city since ancient times. The city is famous for its salt production, pearl fishing, and as a major industrial center with thermal power plants and chemical industries.',
    attractions: [
      {
        id: 'our-lady-of-snows-basilica',
        name: 'Our Lady of Snows Basilica',
        description: 'Historic Catholic church and pilgrimage center.',
        image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'heritage',
        rating: 4.4,
        districtId: 'thoothukudi'
      }
    ],
    malls: [
      { name: 'Thoothukudi Shopping Mall', location: 'Palayamkottai Road', rating: 3.9 }
    ],
    restaurants: [
      { name: 'Hotel Sugam', cuisine: 'South Indian', location: 'VOC Port Road', rating: 4.2 }
    ],
    beaches: [
      { name: 'Thoothukudi Beach', length: '3 km', activities: ['Port viewing', 'Salt fields tour', 'Photography'] }
    ],
    hotels: [
      {
        id: 'hotel-thoothukudi',
        name: 'Hotel Thoothukudi',
        description: 'Port city hotel with modern amenities.',
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 4200,
        rating: 4.1,
        amenities: ['WiFi', 'Restaurant', 'AC', 'Business Center'],
        districtId: 'thoothukudi',
        available: true
      }
    ]
  },
  {
    id: 'kanniyakumari',
    name: 'Kanniyakumari',
    description: 'Southernmost district where three oceans meet, land of sunrise and sunset.',
    image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Kanniyakumari, the southernmost tip of mainland India, has been a significant pilgrimage site since ancient times. The district is named after the goddess Kanniyakumari and has played an important role in maritime trade and cultural exchange.',
    attractions: [
      {
        id: 'kumari-amman-temple',
        name: 'Kumari Amman Temple',
        description: 'Ancient temple dedicated to the virgin goddess Kumari.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 4.6,
        districtId: 'kanniyakumari'
      }
    ],
    malls: [
      { name: 'Kanniyakumari Shopping Center', location: 'Sannathi Street', rating: 3.8 }
    ],
    restaurants: [
      { name: 'Hotel Saravana', cuisine: 'South Indian', location: 'Main Road', rating: 4.3 }
    ],
    beaches: [
      { name: 'Kanniyakumari Beach', length: '2 km', activities: ['Sunrise viewing', 'Sunset viewing', 'Temple visits'] }
    ],
    hotels: [
      {
        id: 'hotel-kanniyakumari',
        name: 'Hotel Kanniyakumari',
        description: 'Beachfront hotel at the tip of India.',
        image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 5000,
        rating: 4.3,
        amenities: ['WiFi', 'Sea View', 'Restaurant', 'AC', 'Sunrise View'],
        districtId: 'kanniyakumari',
        available: true
      }
    ]
  },
  {
    id: 'ariyalur',
    name: 'Ariyalur',
    description: 'Known for cement industry and fossil discoveries.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Ariyalur, one of the newest districts in Tamil Nadu, is known for its cement industry and geological significance. The area has yielded important fossil discoveries and has become an industrial center.',
    attractions: [
      {
        id: 'ariyalur-fossil-park',
        name: 'Ariyalur Fossil Park',
        description: 'Geological park showcasing ancient fossils and rock formations.',
        image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'wildlife',
        rating: 4.0,
        districtId: 'ariyalur'
      }
    ],
    malls: [
      { name: 'Ariyalur Shopping Complex', location: 'Collectorate Road', rating: 3.5 }
    ],
    restaurants: [
      { name: 'Hotel Annapoorna', cuisine: 'South Indian', location: 'Bus Stand', rating: 3.8 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-ariyalur',
        name: 'Hotel Ariyalur',
        description: 'Industrial town hotel with basic amenities.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 2500,
        rating: 3.6,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'ariyalur',
        available: true
      }
    ]
  },
  {
    id: 'perambalur',
    name: 'Perambalur',
    description: 'Small district known for agriculture and limestone quarries.',
    image: 'https://images.pexels.com/photos/1647676/pexels-photo-1647676.jpeg?auto=compress&cs=tinysrgb&w=800',
    history: 'Perambalur, one of the smallest districts in Tamil Nadu, was carved out from Tiruchirappalli district. The area is primarily agricultural with some limestone quarrying activities.',
    attractions: [
      {
        id: 'perambalur-temple',
        name: 'Perambalur Temple',
        description: 'Local temple with traditional architecture.',
        image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'temple',
        rating: 3.9,
        districtId: 'perambalur'
      }
    ],
    malls: [
      { name: 'Perambalur Shopping Center', location: 'Main Road', rating: 3.4 }
    ],
    restaurants: [
      { name: 'Hotel Selvam', cuisine: 'South Indian', location: 'Bus Stand', rating: 3.7 }
    ],
    beaches: [],
    hotels: [
      {
        id: 'hotel-perambalur',
        name: 'Hotel Perambalur',
        description: 'Simple accommodation in rural setting.',
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 2200,
        rating: 3.5,
        amenities: ['WiFi', 'Restaurant', 'AC'],
        districtId: 'perambalur',
        available: true
      }
    ]
  }
];