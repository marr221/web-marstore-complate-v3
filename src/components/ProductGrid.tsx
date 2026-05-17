import { Star, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, PRODUCTS } from '../config';

export default function ProductGrid({ filterGame, searchQuery = '' }: { filterGame?: string | null, searchQuery?: string }) {
  let filteredProducts = filterGame 
    ? PRODUCTS.filter(p => p.game.toLowerCase() === filterGame.toLowerCase())
    : PRODUCTS;

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.game.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <section id="product-grid-section" className="py-16 px-6 md:px-12 bg-surface-800/50">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 id="product-grid-title" className="text-3xl font-bold tracking-tight mb-2">
            {filterGame ? `Akun ${filterGame}` : 'Akun Terbaru'}
          </h2>
          <p id="product-grid-desc" className="text-slate-400">
            {filterGame 
              ? `Menampilkan stok akun terbaik untuk ${filterGame}` 
              : 'Temukan akun impianmu di marketplace kami'}
          </p>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div id="product-cards-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div id="empty-product-state" className="text-center py-20 glass rounded-3xl border border-white/5">
          <p className="text-slate-400 font-bold">Maaf, stok akun {filterGame || searchQuery ? 'yang anda cari' : ''} sedang kosong.</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <Link id="view-all-marketplace" to="/marketplace" className="inline-block glass px-12 py-3 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all">
          Lihat Semua Produk
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: any, index: number }) {
  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const title = product?.title || 'Produk';
    const message = SITE_CONFIG.productMessage.replace('{title}', title);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const id = product?.id || index;
  const image = product?.image || 'https://via.placeholder.com/400x300?text=No+Image';
  const title = product?.title || 'Akun Tanpa Judul';
  const game = product?.game || 'Game';
  const price = product?.price || 0;
  const oldPrice = product?.oldPrice || 0;
  const rating = product?.rating || 0;
  const seller = product?.seller || 'Anonim';

  return (
    <motion.div
      id={`product-card-${id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="glass group rounded-2xl border border-white/5 overflow-hidden hover:border-brand-primary/30 transition-all duration-300 transform hover:-translate-y-1 will-change-transform"
    >
      <Link to={`/produk/${id}`} className="block h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-surface-900/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-extrabold text-brand-primary border border-brand-primary/30">
              {game}
            </span>
            {product?.verified && (
              <span className="bg-green-500/20 backdrop-blur-md p-1 rounded text-green-400 border border-green-500/30">
                <ShieldCheck size={14} />
              </span>
            )}
          </div>
        </div>

        <div className="p-5 flex flex-col h-[calc(100%-75%)]">
          <h3 className="font-bold text-lg mb-1 group-hover:text-brand-primary transition-colors line-clamp-1">
            {title}
          </h3>
          
          <div className="flex items-center gap-1 mb-4">
            <div className="flex text-yellow-400">
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-xs font-bold text-slate-300">{rating}</span>
            <span className="text-xs text-slate-500 ml-1">• {seller}</span>
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
            <div>
              {oldPrice > 0 && <p className="text-[10px] text-slate-500 line-through">Rp {oldPrice.toLocaleString()}</p>}
              <p className="text-xl font-black text-white">Rp {price.toLocaleString()}</p>
            </div>
            <div 
              onClick={handleBuy}
              role="button"
              id={`buy-btn-${id}`}
              className="bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-surface-900 p-2 rounded-lg transition-all border border-brand-primary/20"
            >
              <MessageCircle size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
