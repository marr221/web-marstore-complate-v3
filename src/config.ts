/**
 * Configuration for the GameStore application.
 * Edit this file to change the website name, stock, and information.
 */

import { PRODUCTS } from './data/products';

export const SITE_CONFIG = {
  name: "MARSTORE",
  whatsappNumber: "6285136506343", // Ganti dengan nomor WhatsApp anda (format: 628...)
  email: "marstoree12@gmail.com",
  instagram: "marstore.jb",
  tiktok: "mar_store.12", // Ganti dengan username TikTok anda
  telegram: "mar_stur",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb11Kyc4o7qQwzM5zg38", // Ganti dengan link saluran WhatsApp anda
  workingHours: {
    weekday: "09:00 - 22:00 WIB",
    weekend: "10:00 - 21:00 WIB"
  },
  topupMessage: "Halo Admin, saya ingin top up game {game}",
  productMessage: "Halo Admin, saya tertarik untuk membeli akun: {title}",
};

export const LATEST_INFO = [
  {
    id: 1,
    date: "15 Mei 2026",
    title: "Info!",
    content: "Follow chanel whatsapp MAR STORE agar tidak ketinggalan informasi terbaru!",
  },
  {
    id: 2,
    date: "10 Mei 2026",
    title: "Update Keamanan Transaksi",
    content: "Gunakan jasa rekber/mc MAR STORE agar terhindar dari penipuan.",
  },
  {
    id: 3,
    date: "16 Mei 2026",
    title: "MAR STORE Info",
    content: "MAR STORE menyediakan banyak layanan, mulai dari Top-up game, rekber/mc, jual akun, beli akun, jasa membuat website, DLL",
  },
];

export { PRODUCTS };

export const TOPUP_GAMES = [
  { name: 'Mobile Legends', price: 'Harga murah dan pastinya aman', icon: '💎', category: 'Mobile', slug: 'mobile-legends' },
  { name: 'Free Fire', price: 'Harga murah dan pastinya aman', icon: '🔥', category: 'Mobile', slug: 'free-fire' },
  { name: 'Sosial Media', price: 'Harga murah dan pastinya aman', icon: '✨', category: 'Sosmed', slug: 'sosial-media' },
  { name: 'Roblox', price: 'Harga murah dan pastinya aman', icon: '🧱', category: 'Universal', slug: 'roblox' },
];

export const POPULAR_GAMES = [
  { name: 'Mobile Legends', icon: 'ML', image: 'https://i.ibb.co.com/Kj6zvQ5r/71d2141b6bedf4841528fce2c181597e.jpg' },
  { name: 'Free Fire', icon: 'FF', image: 'https://i.ibb.co.com/v6XzFQMg/05e55d6dd73173f755ab5fde46e98b16.jpg' },
  { name: 'Roblox', icon: 'RB', image: 'https://i.ibb.co.com/Nnphm212/6d966996c332777b1675e0fbb113203a.jpg' },
];

export const GAME_DETAILS: Record<string, any> = {
  'mobile-legends': {
    name: 'Mobile Legends',
    icon: '💎',
    banner: 'https://i.ibb.co.com/fd1vmjqZ/12b19bcadd8e53fcb58f3fb5463e6219.jpg',
    items: [
      { id: 1, name: '19 Diamonds', price: 'Rp 6.500' },
      { id: 2, name: '59 Diamonds', price: 'Rp 17.500' },
      { id: 3, name: '86 Diamonds', price: 'Rp 23.000' },
      { id: 4, name: '112 Diamonds', price: 'Rp 32.000' },
      { id: 5, name: '185 Diamonds', price: 'Rp 50.000' },
      { id: 6, name: '222 Diamonds', price: 'Rp 59.000' },
      { id: 7, name: '257 Diamonds', price: 'Rp 69.000' },
      { id: 8, name: '301 Diamonds', price: 'Rp 80.000' },
      { id: 9, name: '355 Diamonds', price: 'Rp 93.000' },
      { id: 10, name: '428 Diamonds', price: 'Rp 115.000' },
      { id: 11, name: '514 Diamonds', price: 'Rp 137.000' },
      { id: 12, name: '601 Diamonds', price: 'Rp 159.000' },
      { id: 13, name: '712 Diamonds', price: 'Rp 184.000' },
      { id: 14, name: '875 Diamonds', price: 'Rp 223.000' },
      { id: 15, name: '965 Diamonds', price: 'Rp 248.000' },
      { id: 16, name: '1050 Diamonds', price: 'Rp 270.000' },
      { id: 17, name: 'Weekly Diamond Pass', price: 'Rp 28.500' },
      { id: 18, name: 'Twilight Pass', price: 'Rp 145.000' },
    ],
    fields: [
      { id: 'userId', label: 'User ID', placeholder: 'Contoh: 12345678' },
      { id: 'zoneId', label: 'Server ID', placeholder: 'Contoh: (1234)' },
    ]
  },
  'free-fire': {
    name: 'Free Fire',
    icon: '🔥',
    banner: 'https://i.ibb.co.com/qLkxrvbF/e89d481b55b44ff6da111726fbc387f9.jpg',
    items: [
      { id: 1, name: '12 Diamonds', price: 'Rp 3.000' },
      { id: 2, name: '50 Diamonds', price: 'Rp 8.000' },
      { id: 3, name: '70 Diamonds', price: 'Rp 10.000' },
      { id: 4, name: '100 Diamonds', price: 'Rp 15.000' },
      { id: 5, name: '140 Diamonds', price: 'Rp 19.000' },
      { id: 6, name: '210 Diamonds', price: 'Rp 28.000' },
      { id: 7, name: '300 Diamonds', price: 'Rp 44.000' },
      { id: 8, name: '355 Diamonds', price: 'Rp 48.000' },
      { id: 9, name: '500 Diamonds', price: 'Rp 66.000' },
      { id: 10, name: '720 Diamonds', price: 'Rp 93.000' },
      { id: 11, name: '1000 Diamonds', price: 'Rp 130.000' },
      { id: 12, name: '1450 Diamonds', price: 'Rp 185.000' },
      { id: 13, name: '2180 Diamonds', price: 'Rp 280.000' },
      { id: 14, name: '3640 Diamonds', price: 'Rp 462.000' },
      { id: 15, name: '4000 Diamonds', price: 'Rp 523.000' },
      { id: 16, name: '7290 Diamonds', price: 'Rp 939.000' },
      { id: 17, name: 'Membership Mingguan', price: 'Rp 30.000' },
      { id: 18, name: 'Membership Bulanan', price: 'Rp 87.000' },
    ],
    fields: [
      { id: 'userId', label: 'Player ID', placeholder: 'Contoh: 123456789' },
    ]
  },
  'roblox': {
    name: 'Roblox',
    icon: '🧱',
    banner: 'https://i.ibb.co.com/Nnphm212/6d966996c332777b1675e0fbb113203a.jpg',
    items: [
      { id: 1, name: 'Robux 100', price: 'Rp 15.000' },
      { id: 2, name: 'Robux 200', price: 'Rp 30.000' },
      { id: 3, name: 'Robux 300', price: 'Rp 45.000' },
      { id: 4, name: 'Robux 400', price: 'Rp 60.000' },
      { id: 5, name: 'Robux 500', price: 'Rp 75.000' },
      { id: 6, name: 'Robux 600', price: 'Rp 90.000' },
      { id: 7, name: 'Robux 700', price: 'Rp 105.000' },
      { id: 8, name: 'Robux 800', price: 'Rp 120.000' },
      { id: 9, name: 'Robux 900', price: 'Rp 135.000' },
      { id: 10, name: 'Robux 1000', price: 'Rp 150.000' },
    ],
    fields: [
      { id: 'username', label: 'Username Roblox', placeholder: 'Masukkan username anda' },
    ]
  },
  'sosial-media': {
    name: 'Sosial Media',
    icon: '✨',
    banner: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format',
    items: [
      // Instagram Followers
      { id: 1, name: '100 Instagram Followers', price: 'Rp 1.500' },
      { id: 2, name: '200 Instagram Followers', price: 'Rp 3.000' },
      { id: 3, name: '300 Instagram Followers', price: 'Rp 4.500' },
      { id: 4, name: '400 Instagram Followers', price: 'Rp 6.000' },
      { id: 5, name: '500 Instagram Followers', price: 'Rp 7.500' },
      { id: 6, name: '600 Instagram Followers', price: 'Rp 9.000' },
      { id: 7, name: '700 Instagram Followers', price: 'Rp 10.500' },
      { id: 8, name: '800 Instagram Followers', price: 'Rp 12.000' },
      { id: 9, name: '900 Instagram Followers', price: 'Rp 13.500' },
      { id: 10, name: '1000 Instagram Followers', price: 'Rp 15.000' },
      
      // TikTok Followers
      { id: 11, name: '100 TikTok Followers', price: 'Rp 2.000' },
      { id: 12, name: '200 TikTok Followers', price: 'Rp 4.000' },
      { id: 13, name: '300 TikTok Followers', price: 'Rp 6.000' },
      { id: 14, name: '400 TikTok Followers', price: 'Rp 8.000' },
      { id: 15, name: '500 TikTok Followers', price: 'Rp 10.000' },
      { id: 16, name: '600 TikTok Followers', price: 'Rp 12.000' },
      { id: 17, name: '700 TikTok Followers', price: 'Rp 14.000' },
      { id: 18, name: '800 TikTok Followers', price: 'Rp 16.000' },
      { id: 19, name: '900 TikTok Followers', price: 'Rp 18.000' },
      { id: 20, name: '1000 TikTok Followers', price: 'Rp 20.000' },

      // Instagram Likes
      { id: 21, name: '100 Instagram Likes', price: 'Rp 1.000' },
      { id: 22, name: '200 Instagram Likes', price: 'Rp 2.000' },
      { id: 23, name: '300 Instagram Likes', price: 'Rp 3.000' },
      { id: 24, name: '400 Instagram Likes', price: 'Rp 4.000' },
      { id: 25, name: '500 Instagram Likes', price: 'Rp 5.000' },
      { id: 26, name: '600 Instagram Likes', price: 'Rp 6.000' },
      { id: 27, name: '700 Instagram Likes', price: 'Rp 7.000' },
      { id: 28, name: '800 Instagram Likes', price: 'Rp 8.000' },
      { id: 29, name: '900 Instagram Likes', price: 'Rp 9.000' },
      { id: 30, name: '1000 Instagram Likes', price: 'Rp 10.000' },

      // TikTok Likes
      { id: 31, name: '100 TikTok Likes', price: 'Rp 1.200' },
      { id: 32, name: '200 TikTok Likes', price: 'Rp 2.400' },
      { id: 33, name: '300 TikTok Likes', price: 'Rp 3.600' },
      { id: 34, name: '400 TikTok Likes', price: 'Rp 4.800' },
      { id: 35, name: '500 TikTok Likes', price: 'Rp 6.000' },
      { id: 36, name: '600 TikTok Likes', price: 'Rp 7.200' },
      { id: 37, name: '700 TikTok Likes', price: 'Rp 8.400' },
      { id: 38, name: '800 TikTok Likes', price: 'Rp 9.600' },
      { id: 39, name: '900 TikTok Likes', price: 'Rp 10.800' },
      { id: 40, name: '1000 TikTok Likes', price: 'Rp 12.000' },
    ],
    fields: [
      { id: 'link', label: 'Link / Username', placeholder: 'Masukkan link profil/username' },
    ]
  }
};
