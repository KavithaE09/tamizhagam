import { District } from '../types';

export const tamilNaduDistricts: District[] = [
  {
    id: 'chennai',
    name: 'Chennai',
    description: 'The vibrant capital city, gateway to South India with rich culture and modern amenities.',
    image: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/1765681589chennai-1696645169332.jpg',
    history: 'Chennai, formerly known as Madras, was established in 1639 by the British East India Company. The city has evolved from a small fishing village called Madraspatnam to become the cultural and economic capital of South India. It served as the winter capital of the Madras Presidency during British rule and has been a major center for Tamil literature, music, and dance.',
    attractions: [
      {
        id: 'marina-beach',
        name: 'Marina Beach',
        description: 'World\'s second-longest urban beach with golden sands and vibrant street life.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/20/a9/nice-places-to-see-at.jpg?w=700&h=-1&s=1',
        category: 'beach',
        rating: 4.3,
        districtId: 'chennai'
      },
      {
        id: 'kapaleeshwarar-temple',
        name: 'Kapaleeshwarar Temple',
        description: 'Ancient Dravidian architecture temple dedicated to Lord Shiva in Mylapore.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/86/2c/66/caption.jpg?w=800&h=400&s=1',
        category: 'temple',
        rating: 4.5,
        districtId: 'chennai'
      },
      {
        id: 'fort-st-george',
        name: 'Fort St. George',
        description: 'Historic British fort and museum showcasing colonial heritage.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Fort_St._George%2C_Chennai_2.jpg',
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
    image: 'https://i.ytimg.com/vi/3OUbEhqVC2E/sddefault.jpg',
    history: 'Madurai, one of the oldest continuously inhabited cities in the world, has a history spanning over 2500 years. Known as the "Athens of the East," it was the capital of the Pandyan Kingdom and later ruled by various dynasties including the Cholas, Vijayanagara Empire, and the Nayaks. The city is famous for its rich Tamil culture and literature.',
    attractions: [
      {
        id: 'meenakshi-temple',
        name: 'Meenakshi Amman Temple',
        description: 'Historic Hindu temple with stunning Dravidian architecture and intricate sculptures.',
        image: 'https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg',
        category: 'temple',
        rating: 4.8,
        districtId: 'madurai'
      },
      {
        id: 'thirumalai-nayakkar-palace',
        name: 'Thirumalai Nayakkar Palace',
        description: 'Indo-Saracenic architectural marvel built by King Thirumalai Nayak.',
        image: 'https://maduraitourism.co.in/images/places-to-visit/headers/thirumalai-nayak-palace-madurai-entry-fee-timings-holidays-reviews-header.jpg',
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
    image: 'https://i.ytimg.com/vi/x_Ndx77y1sQ/maxresdefault.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXyzyhoVgwUrGkMIm9bZQPCpiJPtrz7o96A&s',
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
    image: 'https://i.ytimg.com/vi/qiI1ltbjzFg/maxresdefault.jpg',
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
    image: 'https://i.ytimg.com/vi/RqsVrQ-LfzQ/maxresdefault.jpg',
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
    image: 'https://i.ytimg.com/vi/VNmNzqnPf0s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCN8QKZ0AxrrDovZX0d3XUlmo9_Sw',
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
    image: 'https://www.erodesmartcity.org/wp-content/uploads/2021/06/erode-slider.png',
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
    image: 'https://i.ytimg.com/vi/s3MMw3OO8wM/mqdefault.jpg',
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
    image: 'https://s3.india.com/wp-content/uploads/2024/08/Explore-Thanjavur_-The-Cultural-Capital-Rice-Bowl-Of-Tamil-Nadu.jpg?impolicy=Medium_Widthonly&w=350&h=263',
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
    image: 'https://experiencemyindia.com/wp-content/uploads/2024/12/kanyakumari.jpg',
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
    name: 'Ooty',
    description: 'Queen of Hill Stations with cool climate, tea gardens, and scenic mountain views.',
    image: 'https://www.holidaylap.com/wp-content/uploads/2025/04/1651490421554.jpg',
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
    image: 'https://pbs.twimg.com/media/Eh7gvJvU8AAIN-L.jpg:large',
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
    image: 'https://i.ytimg.com/vi/H2hqX5zGub4/maxresdefault.jpg',
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
    image: 'https://i.ytimg.com/vi/e06THpOk7HM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC2g7Hxd7IZKOvdW0egmIMSouw1Yg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSynJAn3kAvm6KtyoFVc67C7TfMPmwvkXEA&s',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcV8oJh5ldpuHXsBkcHLvWET181AqObh_0LA&s',
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
    image: 'https://t3.ftcdn.net/jpg/06/21/17/72/360_F_621177265_uLw9U67KFMmsQgM6HcbOIsaCbfh52C8n.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKuYf4fwzHGjByIZD7dV8EZMzFWIgjONj7g&s',
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
    image: 'https://www.trawell.in/admin/images/upload/705433541Tiruvanamali_Main.jpg',
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
    image: 'https://inditales.com/wp-content/uploads/2019/08/ekambarnath-mandir-corridor-kanchipuram.jpg',
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
    image: 'data:image/jpeg;base64,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',
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
    id: 'nagapattinam',
    name: 'Nagapattinam',
    description: 'Coastal district known for Velankanni Church and fishing industry.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZumkAPgf1yOKpRb4-5QhAWa8Tmbklh_mTQ&s',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmph-fzGirFgwrxmldVOmBoZaPqzoF0dQzzw&s',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-n2zSqCIVwiLxO3FSjFkr50vQQvgdk9XqQ&s',
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
    image: 'https://i.ytimg.com/vi/SsHlQ2jyDWM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDbvYEI44-OYI-e7I3lKJvRYrK3jA',
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
    image: 'https://i.ytimg.com/vi/ngCuGfYTrVw/maxresdefault.jpg',
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
    image: 'https://i.ytimg.com/vi/3BmFFAZuTJg/maxresdefault.jpg',
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
    image: 'https://www.mapsofindia.com/ci-moi-images/my-india/2016/05/places-to-visit-in-theni-tamil-nadu.jpg',
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
    image: 'https://peopleplaces.in/wp-content/uploads/2023/02/Thoothukudi-A-Journey-To-The-Port-City-Of-Tamil-Nadu.jpg',
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
    id: 'ariyalur',
    name: 'Ariyalur',
    description: 'Known for cement industry and fossil discoveries.',
    image: 'https://i.ytimg.com/vi/_TeLPNxl0CM/maxresdefault.jpg',
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
  }
  
];