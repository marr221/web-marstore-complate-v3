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
      'info' : ' jual akun langsung ke wa aja',
    },
  },
  {
    id: 40,
    title: 'Stok Akun ML Kolektor Terhormat',
    game: 'Mobuile Legends',
    price: 500000,
    oldPrice: 650000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/QLdcDtJ/Screenshot-2026-08-13-20-44-20-455-com-mobilelegends-mi.jpg',
    verified: true,
    specs: {
      'Keterangan' : 'Kolektor terhormat 5',
      'Skin legend' : 'Alucard Legend',
      'Skin Grand' : 'Karina KOF & Hayabusa Exorcist',
      'Skin Epic' : 'Bejibun',
      'Info Harga' : 'harga bisa dinego'
    }
  },
];
