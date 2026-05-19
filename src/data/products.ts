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
    title: 'Akun FreeFire Mureh Meriah!',
    game: 'Free Fire',
    price: 60000,
    oldPrice: 150000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/yck5s9td/In-Collage-20260519-183143532.jpg',
    verified: true,
    specs: {
      'Vault' : '190+',
      'Evogun': 'AK47 LV 5',
      'Shotgun 2': 'Mamba & Bunny',
      'Prime': 'Prime 3',
    }
  },
];
