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
    id: 30,
    title: 'Akun BloxFruits Permanen Dought&Budha!',
    game: 'Roblox',
    price: 100000,
    oldPrice: 150000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/1fN759CH/In-Collage-20260606-111845885.jpg',
    verified: true,
    specs: {
      'Fruits Permanen' : 'Dought, buddha, rocket',
      'Gamepass' : 'Darkblade, fast boat',
      'Accessory' : 'Oni helmet, divine cloak, celestial helmet',
      'Avatar' : 'Be-robux parah+banyak dan bagus bagus',
      'Info' : 'Harga akun bisa di nego',
    }
  },
  {
  id: 31,
    title: 'Akun Blue Lock!',
    game: 'Roblox',
    price: 15000,
    oldPrice: 70000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/cSW1TNB5/In-Collage-20260602-180143099.jpg',
    verified: true,
    specs: {
      'Style' : 'Sae',
      'Flow' : 'Magician Flow',
      'Info' : 'Harga akun bisa di nego!',
    }
  },
  {
    id: 32,
    title: 'Akun Volleyball legned',
    game: 'Roblox',
    price: 40000,
    oldPrice: 120000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/Xr142cK7/IMG-20260606-WA0166.jpg',
    verified: true,
    specs: {
      'Style' : 'Timeskip hinto, kazana, akari, okazu, kyoshin',
      'Abilities' : 'Shield breaker, magnetic pull',
      'Info' : 'Harga akun bisa di nego!',
    }
  },
  {
    id: 33,
    title: 'Akun Roblox GG',
    game: 'Roblox',
    price : 25000,
    oldPrice: 50000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/HT1pc68v/In-Collage-20260602-181155124.jpg',
    verified: true,
    specs: {
      'Info' : 'Untuk spesifikasi lengkap silahkan menghubungi MARSTORE',
      'Info2' : 'Harga akun bisa di nego',
    }
  },
  {
    id: 34,
    title: 'Akun FreeFire Murah',
    game: 'Free Fire',
    price: 85000,
    oldPrice: 110000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/x8jKrnCK/In-Collage-20260603-204141461.jpg',
    verified: true,
    specs: {
      'Vault' : '100+',
      'SG2' : 'Trompet, mamba, bunny',
      'Evogun' : 'AK47 LV3',
      'Prime' : '3',
    }
  },
];
