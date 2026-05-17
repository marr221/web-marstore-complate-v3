import { Send, Mail, Instagram, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../../config';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">Hubungi <span className="text-brand-primary">Kami</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Tanyakan apa pun kepada tim kami. Kami siap membantu menyelesaikan kendala Anda secepat mungkin.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard 
            icon={<MessageCircle size={32} />}
            title="WhatsApp"
            desc="Chat langsung dengan admin melalui WhatsApp."
            action={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            actionLabel="Chat WA"
            color="brand-primary"
          />
          <ContactCard 
            icon={<Send size={32} />}
            title="Telegram"
            desc="Hubungi admin melalui Telegram Messenger."
            action={`https://t.me/${(SITE_CONFIG as any).telegram}`}
            actionLabel="Chat Telegram"
            color="brand-accent"
          />
          <ContactCard 
            icon={<Mail size={32} />}
            title="Email"
            desc="Kirim pertanyaan atau keluhan via email."
            action={`mailto:${(SITE_CONFIG as any).email}`}
            actionLabel="Kirim Email"
            color="brand-primary"
          />
          <ContactCard 
            icon={<Instagram size={32} />}
            title="Instagram"
            desc="Dapatkan info terbaru dan hubungi kami via DM."
            action={`https://instagram.com/${(SITE_CONFIG as any).instagram}`}
            actionLabel="Follow Kami"
            color="brand-accent"
          />
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
               <Clock className="text-brand-primary" /> Jam Operasional
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400">Senin - Jumat</span>
                <span className="font-bold">{(SITE_CONFIG as any).workingHours?.weekday}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400">Sabtu - Minggu</span>
                <span className="font-bold">{(SITE_CONFIG as any).workingHours?.weekend}</span>
              </div>
              <p className="text-xs text-center text-slate-500 mt-4 italic">
                *Pesanan di luar jam operasional akan diproses pada hari berikutnya.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, desc, action, actionLabel, color }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all text-center flex flex-col items-center"
    >
      <div className={`p-4 bg-${color}/10 rounded-2xl text-${color} mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-8">{desc}</p>
      <a 
        href={action}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto w-full py-3 rounded-xl font-bold transition-all border border-${color}/20 bg-${color}/10 text-${color} hover:bg-${color} hover:text-surface-900`}
      >
        {actionLabel}
      </a>
    </motion.div>
  );
}
