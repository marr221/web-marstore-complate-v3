import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { POPULAR_GAMES } from '../config';

export default function GameCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Game Populer</h2>
          <p className="text-slate-400">Pilih game favoritmu untuk mulai belanja</p>
        </div>
        <button 
          onClick={() => navigate('/marketplace')}
          className="text-brand-primary font-bold text-sm hover:underline"
        >
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {POPULAR_GAMES.map((game, i) => (
          <motion.div
            key={game.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => navigate(`/marketplace?game=${encodeURIComponent(game.name)}`)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 border border-white/5 group-hover:border-brand-primary/50 transition-colors">
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-primary/20 backdrop-blur-[2px]">
                <span className="font-bold text-xs bg-surface-900 border border-brand-primary px-3 py-1 rounded-full text-brand-primary">
                   PILIH
                </span>
              </div>
            </div>
            <p className="text-center text-sm font-bold text-slate-300 group-hover:text-brand-primary transition-colors truncate">
              {game.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
