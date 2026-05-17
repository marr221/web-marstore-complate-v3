import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const FAQS = [
  {
    question: "Berapa lama proses Top Up?",
    answer: "Proses top up di platform kami berlangsung sangat cepat, dalam hitungan detik setelah pembayaran terverifikasi otomatis oleh sistem. Rata-rata waktu tunggu adalah 1-5 menit."
  },
  {
    question: "Apakah akun yang dijual aman?",
    answer: "Ya, semua akun yang terdaftar di marketplace kami telah melalui proses verifikasi merchant. Kami juga memberikan garansi anti hack-back selama periode tertentu sesuai dengan paket proteksi yang dipilih."
  },
  {
    question: "Apa saja metode pembayaran yang tersedia?",
    answer: "Kami mendukung berbagai metode pembayaran mulai dari QRIS, E-Wallet (OVO, DANA, GoPay, ShopeePay), Transfer Bank (BCA, Mandiri, BNI, BRI), hingga Alfamart/Indomaret."
  },
  {
    question: "Bagaimana jika pesanan saya belum masuk?",
    answer: "Jika dalam 15 menit pesanan belum masuk, silakan hubungi Customer Service kami melalui WhatsApp dengan menyertakan Invoice ID pesanan Anda."
  },
  {
    question: "Apakah bisa refund jika salah memasukkan ID?",
    answer: "Mohon maaf, segala kesalahan input nomor tujuan (seperti User ID) oleh pelanggan bukan merupakan tanggung jawab kami. Sistem kami memproses secara otomatis sesuai input yang diberikan. Harap teliti sebelum membayar."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 bg-brand-primary/10 rounded-2xl text-brand-primary mb-4">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Pertanyaan <span className="text-brand-primary">Umum</span></h1>
          <p className="text-slate-400">Temukan jawaban cepat untuk pertanyaan yang sering diajukan seputar layanan kami.</p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="mt-20 glass p-8 rounded-3xl border border-white/5 text-center">
          <h3 className="text-xl font-bold mb-2">Masih punya pertanyaan lain?</h3>
          <p className="text-slate-400 mb-6">Tim dukungan kami siap membantu menjawab kebingungan Anda.</p>
          <a href="/hubungi-kami" className="inline-block bg-brand-primary text-surface-900 font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform">
             Hubungi Support
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ faq, index }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass border border-white/5 rounded-2xl overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-lg">{faq.question}</span>
        <div className={`p-1 rounded-full ${isOpen ? 'bg-brand-primary text-surface-900' : 'bg-surface-900 text-slate-400'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 bg-white/2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
