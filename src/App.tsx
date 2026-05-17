/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Banner from './components/Banner';
import GameCategories from './components/GameCategories';
import TopupSection from './components/TopupSection';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MarketplacePage from './pages/MarketplacePage';
import InformationPage from './pages/InformationPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TopupPage from './pages/TopupPage';
import TopupDetailPage from './pages/TopupDetailPage';
import ContactPage from './pages/support/ContactPage';
import FAQPage from './pages/support/FAQPage';
import PrivacyPage from './pages/support/PrivacyPage';
import TermsPage from './pages/support/TermsPage';
import { SITE_CONFIG } from './config';
import { motion } from 'motion/react';
import { Mail, Instagram, Phone, Home, MessageCircle, Music } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/topup" element={<TopupPage />} />
            <Route path="/topup/:slug" element={<TopupDetailPage />} />
            <Route path="/informasi" element={<InformationPage />} />
            <Route path="/produk/:id" element={<ProductDetailPage />} />
            <Route path="/hubungi-kami" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/kebijakan-privasi" element={<PrivacyPage />} />
            <Route path="/syarat-ketentuan" element={<TermsPage />} />
          </Routes>
        </main>

        <footer className="bg-surface-800 py-20 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black tracking-tighter uppercase">{SITE_CONFIG.name.split('STORE')[0]}<span className="text-brand-primary">STORE</span></span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Platform marketplace gaming paling aman dan terpercaya di Indonesia. Memberikan layanan terbaik untuk seluruh gamers.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Music size={18} />} href={`https://tiktok.com/@${(SITE_CONFIG as any).tiktok}`} />
                <SocialIcon icon={<Instagram size={18} />} href={`https://instagram.com/${SITE_CONFIG.instagram}`} />
                <SocialIcon icon={<MessageCircle size={18} />} href={(SITE_CONFIG as any).whatsappChannel} />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Layanan</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/topup" className="hover:text-brand-primary transition-colors">Top Up & Sosmed</Link></li>
                <li><Link to="/marketplace" className="hover:text-brand-primary transition-colors">Marketplace Akun</Link></li>
                <li><Link to="/informasi" className="hover:text-brand-primary transition-colors">Informasi Promo</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Dukungan</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/hubungi-kami" className="hover:text-brand-primary transition-colors">Hubungi Kami</Link></li>
                <li><Link to="/faq" className="hover:text-brand-primary transition-colors">Pertanyaan Umum (FAQ)</Link></li>
                <li><Link to="/kebijakan-privasi" className="hover:text-brand-primary transition-colors">Kebijakan Privasi</Link></li>
                <li><Link to="/syarat-ketentuan" className="hover:text-brand-primary transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Customer Service</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone size={16} className="text-brand-primary" />
                  <span>+{SITE_CONFIG.whatsappNumber}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail size={16} className="text-brand-primary" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                <p className="text-xs text-slate-500 mt-4 italic">
                  Jam Operasional: {SITE_CONFIG.workingHours?.weekday}
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500">
              &copy; 2026 {SITE_CONFIG.name} Indonesia. All Rights Reserved.
            </p>
            <div className="flex gap-4">
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Banner />
      <GameCategories />
      <TopupSection />
    </>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2 bg-surface-700 rounded-lg text-slate-400 hover:text-brand-primary hover:bg-surface-600 transition-all"
    >
      {icon}
    </a>
  );
}

