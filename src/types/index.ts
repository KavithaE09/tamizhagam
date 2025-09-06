export interface District {
  id: string;
  name: string;
  description: string;
  image: string;
  history: string;
  attractions: Attraction[];
  malls: Mall[];
  restaurants: Restaurant[];
  beaches: Beach[];
  hotels: Hotel[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'temple' | 'beach' | 'hill-station' | 'heritage' | 'wildlife' | 'cultural';
  rating: number;
  districtId: string;
}

export interface Mall {
  name: string;
  location: string;
  rating: number;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  location: string;
  rating: number;
}

export interface Beach {
  name: string;
  length: string;
  activities: string[];
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  amenities: string[];
  districtId: string;
  available: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

export interface BookingItem {
  hotel: Hotel;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
}

export interface Booking {
  id: string;
  userId: string;
  items: BookingItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}