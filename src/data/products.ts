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
   id: 45,
   title: 'Stok FF max 1 murmer',
   game: 'Free Fire',
   price: 90000,
   oldPrice: 110000,
   rating: 5,
   seller: 'MARSTORE',
   image: 'https://i.ibb.co.com/Q75KchSh/In-Collage-20261017-140408175.jpg',
   verified: true,
   specs: {
     'Vault' : '100+',
     'evogun' : 'mp5 lv 7',
     'sg2' : 'lumut',
     'info' : 'info lebih lengkap atau nego harga silahkan chat admin',
    },
  },
  {
    id: 44,
    title: 'Stok FF Trompet Clubber',
    game: 'Free Fire',
    price: 150000,
    oldPrice: 180000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/RpgdK3CT/In-Collage-20260909-211214074.jpg',
    verified: true,
    specs: {
      'Vault' : '450+ Clubber pink',
      'sg2' : 'trompet',
      'evogun' : 'scar lv6 & mp40 cobra',
      'info' : 'info lebih lengkap atau nego harga silahkan chat admin',
    },
  },
];