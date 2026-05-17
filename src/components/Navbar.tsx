import { Gamepad2, Layers, Zap, Info, MoreVertical, X, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface-900 border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
        <div className="bg-brand-primary/20 p-2 rounded-lg group-hover:bg-brand-primary/30 transition-colors">
          <Gamepad2 className="text-brand-primary w-6 h-6" />
        </div>
        <span className="text-xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 uppercase">
          {SITE_CONFIG.name.split('STORE')[0]}<span className="text-brand-primary">STORE</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink to="/" icon={<Home size={18}/>} label="Home" />
        <NavLink to="/marketplace" icon={<Layers size={18}/>} label="Marketplace" />
        <NavLink to="/topup" icon={<Zap size={18}/>} label="Top-Up & Sosmed" />
        <NavLink to="/informasi" icon={<Info size={18}/>} label="Informasi" />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-brand-primary transition-colors glass rounded-xl border-white/10"
        >
          {isMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
        </button>
      </div>

      {/* Mobile Menu Pop-up */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-[calc(100%+8px)] right-6 w-56 bg-surface-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl md:hidden py-2"
          >
            <div className="flex flex-col">
              <MobileNavLink to="/" icon={<Home size={20}/>} label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink to="/marketplace" icon={<Layers size={20}/>} label="Marketplace" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink to="/topup" icon={<Zap size={20}/>} label="Top-Up & Sosmed" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink to="/informasi" icon={<Info size={20}/>} label="Informasi" onClick={() => setIsMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link to={to} className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-all">
      {icon}
      {label}
    </Link>
  );
}

function MobileNavLink({ to, icon, label, onClick }: { to: string, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="flex items-center gap-4 px-6 py-4 text-sm font-bold text-slate-300 hover:bg-white/5 hover:text-brand-primary transition-colors border-b border-white/5 last:border-none"
    >
      <span className="text-brand-primary">{icon}</span>
      {label}
    </Link>
  );
}
