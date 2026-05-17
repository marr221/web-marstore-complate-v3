import { motion } from 'motion/react';
import { ArrowRight, Trophy, ShieldCheck, Zap, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="relative overflow-hidden rounded-3xl mx-6 md:mx-12 mt-8 py-20 px-8 md:px-16 lg:px-24">
      {/* Background with gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/40 via-surface-900 to-brand-primary/20 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] mix-blend-overlay opacity-30 bg-cover bg-center -z-20" />
      
      <div className="max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6"
        >
          <Trophy size={14} />
          <span>PLATFORM NO. 1 DI INDONESIA</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          Level Up Your <br />
          <span className="text-brand-primary">Gaming Account</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl"
        >
          Tempat terbaik untuk beli akun sultan, top-up game instan, dan jasa joki terpercaya dengan garansi anti-hack back.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 relative z-30"
        >
          <Link id="banner-buy-now" to="/marketplace" className="bg-brand-primary text-surface-900 font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
            Belanja Sekarang <ArrowRight size={20} />
          </Link>
          <Link id="banner-info" to="/informasi" className="glass font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10">
            <Info size={20} /> Informasi
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-8 opacity-60"
        >
          <Feature icon={<ShieldCheck className="text-green-400" />} label="Garansi 100%" />
          <Feature icon={<Zap className="text-yellow-400" />} label="Proses 1 Menit" />
          <Feature icon={<ShieldCheck className="text-brand-primary" />} label="Anti Hackback Dan Aman" />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-brand-primary blur-[120px] opacity-20 -translate-y-1/2 animate-pulse" />
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {icon}
      <span>{label}</span>
    </div>
  );
}
