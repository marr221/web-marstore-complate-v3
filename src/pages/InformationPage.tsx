import { LATEST_INFO } from '../config';
import { Calendar, Info, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function InformationPage() {
  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <header className="mb-12 pt-10 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 mb-6">
                <Bell className="text-brand-primary w-8 h-8" />
            </div>
            <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">Pusat <span className="text-brand-primary">Informasi</span></h1>
            <p className="text-slate-400 text-lg">Dapatkan berita terbaru mengenai promo, update stok, dan pengumuman penting lainnya.</p>
        </header>

        <div className="space-y-6">
            {LATEST_INFO.map((info, i) => (
                <motion.div 
                    key={info.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-8 rounded-3xl border border-white/10 hover:border-brand-primary/30 transition-all cursor-pointer group"
                >
                    <div className="flex items-center gap-3 text-brand-primary text-xs font-bold mb-4">
                        <Calendar size={14} />
                        <span>{info.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{info.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{info.content}</p>
                </motion.div>
            ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard icon={<Info className="text-brand-primary" />} title="Jam Kerja" description="Kami melayani transaksi setiap hari pukul 09:00 - 22:00 WIB." />
            <InfoCard icon={<Bell className="text-brand-accent" />} title="Notifikasi" description="ikuti channel whatsapp kami untuk melihat informasi stok akun dan informasi lainnya!" />
            <InfoCard icon={<Calendar className="text-brand-secondary" />} title="Update" description="customer service kami selalu siap melayani anda setiap saat" />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="glass p-6 rounded-2xl border border-white/5">
            <div className="mb-4">{icon}</div>
            <h4 className="font-bold mb-2">{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        </div>
    );
}
