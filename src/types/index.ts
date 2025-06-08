export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  priceRange: string;
  image: string;
  description: string;
  affiliateLink: string;
  category: string;
  tags: string[];
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  gradient: string;
}

export interface UserPreference {
  category: string;
  context: string; // 'casual', 'basketball', 'work', etc.
} 