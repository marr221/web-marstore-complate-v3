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
    title: 'Akun FreeFire Murah Meriah!',
    game: 'Free Fire',
    price: 60000,
    oldPrice: 150000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/Z1TgMVvr/In-Collage-20260519-184713284.jpg',
    verified: true,
    specs: {
      'Vault' : '190+',
      'Evogun': 'AK47 LV 5',
      'Shotgun 2': 'Mamba & Bunny',
      'Prime': 'Prime 3',
    }
  },
  {
    id: 2,
    title: 'Akun Mobile Legend Sultan!!',
    game: 'Mobile Legends',
    price: 500000,
    oldPrice: 1000000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/1Gm47KYL/In-Collage-20260505-164403978.jpg',
    verified: true,
    specs: {
      'Kolektor' : 'Terhormat 5',
      'Skin Bagus' : 'Hayabusa 11.11, Irithel Ducati, Ruby Aspirant, Claude Prime, Karina KOF',
      'Luckybox' : 'Alice, Hayabusa, Odette, Lunox,',
      'Collector' : 'Natalia',
      'Login' : 'Moonton',
      'Tambahan' : 'Akun sudah terjamin aman dan bergaransi 100% uang kembali jika terkena hackback!',
    }
  },
  {
  id: 3,
    title: 'Akun Blue Lock!',
    game: 'Roblox',
    price: 5000,
    oldPrice: 20000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/cSW1TNB5/In-Collage-20260602-180143099.jpg',
    verified: true,
  },
];
