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
    id: 47,
    title: "Stok FF gagah murmer",
    game: "Free Fire",
    price: 150000,
    oldPrice: 200000,
    rating: 5,
    seller: 'MARSTORE12',
    image: 'https://i.ibb.co/zLD5B2C/stok047.jpg',
    verified: true,
    specs: {
      'Vault' : '500+',
      'Evo' : 'AK47 lv 6 otw 7',
      'Evo2' : 'Tinju lv 5',
      'Celana' : 'angel merah cowok dan angel ceweknya banyak',
      'sg2' : 'trompet', 
      'info' : 'harga bisa nego',
    }
  },
];