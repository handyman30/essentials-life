import { Category, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'shoes',
    name: 'Shoes',
    icon: '👟',
    subcategories: ['Casual', 'Basketball', 'Running', 'Dress'],
    gradient: ''
  },
  {
    id: 'laptops',
    name: 'Laptops',
    icon: '💻',
    subcategories: ['Mac', 'Windows', 'Gaming', 'Business'],
    gradient: ''
  },
  {
    id: 'watches',
    name: 'Watches',
    icon: '⌚',
    subcategories: ['Rolex', 'Tissot', 'Apple', 'Casio'],
    gradient: ''
  },
  {
    id: 'cars',
    name: 'Cars',
    icon: '🚗',
    subcategories: ['Luxury', 'Sports', 'Electric', 'SUV'],
    gradient: ''
  },
  {
    id: 'tech',
    name: 'Tech',
    icon: '📱',
    subcategories: ['Phones', 'Headphones', 'Cameras', 'Smart Home'],
    gradient: ''
  },
  {
    id: 'style',
    name: 'Style',
    icon: '👔',
    subcategories: ['Casual', 'Formal', 'Streetwear', 'Accessories'],
    gradient: ''
  }
];

export const products: Product[] = [
  // Shoes
  {
    id: 'air-jordan-1',
    name: 'Air Jordan 1 Retro High',
    brand: 'Nike',
    price: '$170',
    priceRange: '$150-200',
    image: '/api/placeholder/300/300',
    description: 'Iconic basketball shoe perfect for street style and casual wear',
    affiliateLink: 'https://nike.com/air-jordan-1',
    category: 'shoes',
    tags: ['basketball', 'casual', 'iconic'],
    rating: 4.8
  },
  {
    id: 'new-balance-550',
    name: '550 Basketball Shoe',
    brand: 'New Balance',
    price: '$110',
    priceRange: '$90-130',
    image: '/api/placeholder/300/300',
    description: 'Clean retro basketball silhouette with modern comfort',
    affiliateLink: 'https://newbalance.com/550',
    category: 'shoes',
    tags: ['basketball', 'retro', 'comfort'],
    rating: 4.6
  },
  
  // Laptops
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro 14" M3',
    brand: 'Apple',
    price: '$1,999',
    priceRange: '$1,800-2,500',
    image: '/api/placeholder/300/300',
    description: 'Powerful laptop for creators and professionals with M3 chip',
    affiliateLink: 'https://apple.com/macbook-pro',
    category: 'laptops',
    tags: ['mac', 'professional', 'creative'],
    rating: 4.9
  },
  {
    id: 'thinkpad-x1',
    name: 'ThinkPad X1 Carbon',
    brand: 'Lenovo',
    price: '$1,399',
    priceRange: '$1,200-1,600',
    image: '/api/placeholder/300/300',
    description: 'Ultra-lightweight business laptop with enterprise security',
    affiliateLink: 'https://lenovo.com/thinkpad-x1',
    category: 'laptops',
    tags: ['windows', 'business', 'lightweight'],
    rating: 4.7
  },

  // Watches
  {
    id: 'rolex-submariner',
    name: 'Submariner Date',
    brand: 'Rolex',
    price: '$9,100',
    priceRange: '$8,500-12,000',
    image: '/api/placeholder/300/300',
    description: 'Legendary diving watch, ultimate luxury timepiece',
    affiliateLink: 'https://rolex.com/submariner',
    category: 'watches',
    tags: ['luxury', 'diving', 'investment'],
    rating: 5.0
  },
  {
    id: 'tissot-seastar',
    name: 'Seastar 1000',
    brand: 'Tissot',
    price: '$375',
    priceRange: '$300-450',
    image: '/api/placeholder/300/300',
    description: 'Swiss diving watch with excellent value proposition',
    affiliateLink: 'https://tissotshop.com/seastar',
    category: 'watches',
    tags: ['swiss', 'diving', 'value'],
    rating: 4.5
  },

  // Cars
  {
    id: 'tesla-model-s',
    name: 'Model S Plaid',
    brand: 'Tesla',
    price: '$89,990',
    priceRange: '$80k-100k',
    image: '/api/placeholder/300/300',
    description: 'Fastest production sedan with autopilot technology',
    affiliateLink: 'https://tesla.com/model-s',
    category: 'cars',
    tags: ['electric', 'luxury', 'performance'],
    rating: 4.8
  },
  {
    id: 'porsche-911',
    name: '911 Carrera',
    brand: 'Porsche',
    price: '$106,100',
    priceRange: '$100k-150k',
    image: '/api/placeholder/300/300',
    description: 'Iconic sports car with perfect balance of performance and daily usability',
    affiliateLink: 'https://porsche.com/911',
    category: 'cars',
    tags: ['sports', 'luxury', 'iconic'],
    rating: 4.9
  }
]; 