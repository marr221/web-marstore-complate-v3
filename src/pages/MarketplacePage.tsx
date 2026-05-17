import { SITE_CONFIG } from '../config';
import { Search, ShoppingBag, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { useSearchParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';

export default function MarketplacePage() {
  const [searchParams] = useSearchParams();
  const filterGame = searchParams.get('game');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <header className="mb-12">
            <h1 className="text-4xl font-black mb-4">Marketplace <span className="text-brand-primary">Gaming</span></h1>
            <p className="text-slate-400 max-w-2xl">Beli akun game terbaik dengan harga bersaing dan garansi keamanan 100%.</p>
        </header>

        {/* Filters/Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/marketplace" className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all border ${!filterGame ? 'bg-brand-primary text-surface-900 border-brand-primary' : 'glass text-slate-400 border-white/5 hover:border-white/20'}`}>
                <Layers size={18} /> Semua Produk
            </Link>
            {filterGame && (
                <div className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-brand-primary text-surface-900 border border-brand-primary">
                   <ShoppingBag size={18} /> {filterGame}
                </div>
            )}
        </div>

        {/* Stock Section */}
        <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <ShoppingBag className="text-brand-primary" /> Stok Akun
                </h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari akun..." 
                        className="glass border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm outline-none w-64 focus:border-brand-primary transition-colors"
                    />
                </div>
            </div>
            <ProductGrid filterGame={filterGame} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

function FilterTab({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all border ${active ? 'bg-brand-primary text-surface-900 border-brand-primary' : 'glass text-slate-400 border-white/5 hover:border-white/20'}`}>
            {icon}
            {label}
        </button>
    );
}
