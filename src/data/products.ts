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
    id: 36,
    title: 'Akun BloxFruits Pemula',
    game: 'Roblox',
    price: 7000,
    oldPrice: 10000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/1fG7YsT6/In-Collage-20260620-213403814.jpg',
    verified: true,
    specs: {
      'Level' : '2399',
      'Fruits' : 'Kitsune',
      'Info' : 'Bisa di nego',
  },
  },
];
