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
    title: 'TES',
    game: '',
    price: 1,
    oldPrice: 2,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/ymGFh9gf/In-Collage-20260719-223644467.jpg',
    verified: true,
    specs: {
      'info' : ' jual akun langsung ke wa aja'
    }
  },
  {
    id: 39,
    title: 'Akun FreeFire Murah',
    game: 'Free Fire',
    price: 170000,
    oldPrice: 200000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/xtQsQ1ZD/IMG-20260720-WA0517.jpg',
    verified: true,
    specs: {
      'Info' : ' Harga akun bisa dinego',
      'Vault' : '380+',
      'Evogun' : 'XM8 level max',
      'Shotgun 2' : 'Gurun pasir',
      'info2' : 'Info lebih lengkap chat admin saja'
    }
  },
];
