import { Zap, ChevronRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { TOPUP_GAMES } from '../config';

export default function TopupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold mb-4">
            <Zap size={14} fill="currentColor" />
            <span>TOP-UP INSTAN 24 JAM</span>
          </div>
          <h1 className="text-4xl font-black mb-4">Top-Up & <span className="text-brand-accent">Sosmed</span></h1>
          <p className="text-slate-400 max-w-2xl">Pilih game kesayanganmu atau layanan sosial media dengan harga termurah dan proses tercepat.</p>
        </header>

        <div className="mb-10 relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Cari game untuk top-up..." 
            className="w-full glass border border-white/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPUP_GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/topup/${game.slug}`)}
              className="glass group p-6 rounded-3xl border border-white/5 hover:border-brand-accent/50 cursor-pointer transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl bg-surface-700 w-20 h-20 flex items-center justify-center rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{game.category}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-accent transition-colors">{game.name}</h3>
                <p className="text-brand-accent font-black">{game.price}</p>
                
                <div className="mt-6 w-full py-2 rounded-xl bg-white/5 group-hover:bg-brand-accent group-hover:text-surface-900 flex items-center justify-center gap-2 border border-white/5 transition-all text-xs font-bold">
                  Pilih Produk <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
