/**
 * FILE DATA PRODUK (MARKETPLACE AKUN)
 * Anda bisa menambah atau menghapus produk di sini.
 * Pastikan setiap produk memiliki ID yang unik.
 */

export interface Product {
  id: number;
  title: string;
  game: string;
  price: number;
  oldPrice: number;
  rating: number;
  seller: string;
  image: string;
  verified: boolean;
  specs?: Record<string, string>; // Opsional: Boleh ada, boleh tidak
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Akun ML Skin Sultan!',
    game: 'Mobile Legends',
    price: 500000,
    oldPrice: 650000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/KzVZt9N0/In-Collage-20260505-164403978.jpg',
    verified: true,
    specs: {
      'Skin bagus' : ' Ruby aspirant, hayabusa 11.11, irithel ducati, karina kof, claude prime dan masih banyak lagi',
      'Hero': '131/131',
      'Emblem': 'Max All',
      'Recall': 'tastas biru',
    }
  },
];
