import { Star, ShieldCheck, Heart, User, Shield, Zap, MessageCircle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SITE_CONFIG, PRODUCTS } from '../config';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h2>
          <Link to="/" className="text-brand-primary hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const handleBuy = () => {
    const message = SITE_CONFIG.productMessage.replace('{title}', product.title);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="mb-8">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                &larr; Kembali
            </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-white/10 aspect-[4/3]">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-col"
          >
            <div className="mb-6">
                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold border border-brand-primary/20 mb-4 inline-block">
                    {product?.game || 'Game'}
                </span>
                <h1 className="text-4xl font-black mb-4 leading-tight">{product?.title || 'Akun Tanpa Judul'}</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={18} fill="currentColor" />
                        <span className="font-bold text-white">{product?.rating || 0}</span>
                    </div>
                    <span className="text-slate-500">|</span>
                    <div className="flex items-center gap-2 text-slate-400">
                        <User size={16} />
                        <span>{product?.seller || 'Anonim'}</span>
                        {product?.verified && <ShieldCheck size={16} className="text-green-400" />}
                    </div>
                </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 mb-8">
                {product?.oldPrice ? <p className="text-slate-500 text-sm mb-1 line-through">Rp {product.oldPrice.toLocaleString()}</p> : null}
                <p className="text-4xl font-black text-white mb-6">Rp {product?.price?.toLocaleString() || 0}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/5">
                        <Shield className="text-brand-primary" size={20} />
                        <span className="text-xs font-semibold">Anti Hackback</span>
                    </div>
                    <div className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/5">
                        <Zap className="text-brand-accent" size={20} />
                        <span className="text-xs font-semibold">Instan Transfer</span>
                    </div>
                </div>

                <button 
                    onClick={handleBuy}
                    className="w-full bg-brand-primary text-surface-900 font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
                >
                    <MessageCircle size={24} />
                    HUBUNGI ADMIN (BELI)
                </button>
            </div>

            <div>
                <h3 className="font-bold text-xl mb-4">Spesifikasi Akun</h3>
                <div className="grid grid-cols-1 gap-3">
                    {product?.specs ? (
                        Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-400 text-sm">{key}</span>
                                <span className="text-white text-sm font-bold">{value}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500 italic text-sm">Tidak ada spesifikasi tambahan.</p>
                    )}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
