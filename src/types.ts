export interface Product {
  id: string;
  name: string;
  persianName: string;
  storeId: string;
  storeName: string;
  price: number; // in Tomans
  category: 'fabric' | 'apparel' | 'notions' | 'traditional';
  description: string;
  persianDescription: string;
  imageUrl: string;
  stock: number;
  unit: string; // e.g. "متر", "عدد", "قواره"
  material?: string;
  color?: string;
}

export interface Store {
  id: string;
  name: string;
  persianName: string;
  city: string;
  persianCity: string;
  rating: number;
  reviewCount: number;
  specialization: string;
  persianSpecialization: string;
  bannerColor: string;
  description: string;
  persianDescription: string;
  phone: string;
  address: string;
  persianAddress: string;
  featuredProductIds: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: {
    productId: string;
    productName: string;
    persianName: string;
    storeName: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'shipping' | 'delivered';
  createdAt: string;
}

export interface Review {
  id: string;
  storeId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}
