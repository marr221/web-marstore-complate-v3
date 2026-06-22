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
    price: 5000,
    oldPrice: 15000,
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
    price: 30000,
    oldPrice: 40000,
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
    id: 35,
    title: 'Akun BloxFruits Pemula',
    game: 'Roblox',
    price: 8000,
    oldPrice: 15000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/DHg4zZ5B/In-Collage-20260620-213002665.jpg',
    verified: true,
    specs: {
      'Level' : '2800',
      'Info' : 'Bisa di nego',
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
{
  id: 36,
    title: 'Akun Freefire Polosan',
    game: 'Free Fire',
    price: 47000,
    oldPrice: 50000,
    rating: 5,
    seller: 'MARSTORE',
    image: 'https://i.ibb.co.com/pjxykSzZ/In-Collage-20260620-213729763.jpg',
    verified: true,
    specs: {
      'Sg' : 'Lumut',
      'Evogun' : 'mp5 LV 5',
      'Log' : 'Bind all aman',
      'Info' : 'Bisa di nego',
}
}
];
