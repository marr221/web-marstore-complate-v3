import { motion } from 'motion/react';
import { Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TOPUP_GAMES } from '../config';

export default function TopupSection() {
  const navigate = useNavigate();
  // Only show first 4 for the home section
  const previewGames = TOPUP_GAMES.slice(0, 4);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="bg-brand-accent/20 p-2 rounded-lg">
            <Zap className="text-brand-accent w-6 h-6 fill-brand-accent" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Top-Up Kilat</h2>
            <p className="text-slate-400">Proses otomatis, masuk dalam hitungan detik</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/topup')}
          className="text-brand-accent font-bold text-sm hover:underline flex items-center gap-1"
        >
          Lihat Semua <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {previewGames.map((game, i) => (
          <motion.div
            key={game.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(`/topup/${game.slug}`)}
            className="glass flex items-center justify-between p-4 rounded-2xl border border-white/5 hover:border-brand-accent/50 group cursor-pointer transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl bg-surface-700 w-12 h-12 flex items-center justify-center rounded-xl font-bold group-hover:scale-110 transition-transform">
                {game.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm">{game.name}</h4>
                <p className="text-xs text-brand-accent font-medium">{game.price}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-500 group-hover:text-brand-accent transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
