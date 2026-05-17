import { Gavel, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex p-3 bg-brand-primary/10 rounded-2xl text-brand-primary mb-4">
            <Gavel size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Syarat & <span className="text-brand-primary">Ketentuan</span></h1>
          <p className="text-slate-400">Harap baca dengan teliti perjanjian penggunaan layanan kami sebelum melakukan transaksi.</p>
        </motion.div>

        <div className="glass p-10 rounded-3xl border border-white/5 space-y-10">
          <TermSection 
            title="1. Ketentuan Umum"
            content="Dengan mengakses dan menggunakan layanan di platform ini, Anda dianggap telah membaca, memahami, dan menyetujui semua isi dalam Syarat & Ketentuan ini."
          />
          <TermSection 
            title="2. Tanggung Jawab Pengguna"
            content="Pengguna bertanggung jawab penuh atas kebenaran Data ID atau Nomor Tujuan yang diinput. Kami tidak bertanggung jawab atas kerugian akibat kesalahan input oleh pengguna."
          />
          <TermSection 
            title="3. Kebijakan Refund"
            content="Semua transaksi yang sudah berhasil diproses dan dikirimkan ke akun pengguna bersifat final dan tidak dapat dibatalkan atau direfund dengan alasan apa pun."
          />
          <TermSection 
            title="4. Garansi Akun Marketplace"
            content="Akun yang dibeli melalui marketplace memiliki garansi sesuai deskripsi masing-masing produk. Klaim garansi hanya berlaku jika melampirkan bukti video unboxing/pembukaan akun."
          />
          <TermSection 
            title="5. Perubahan Layanan"
            content="Kami berhak menghentikan atau mengubah layanan sewaktu-waktu tanpa pemberitahuan sebelumnya jika ditemukan pelanggaran atau pemeliharaan sistem."
          />
        </div>

        <div className="mt-12 flex items-start gap-4 p-6 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl">
          <Info className="text-brand-primary shrink-0" size={24} />
          <p className="text-sm text-slate-400 group">
             Jika Anda tidak setuju dengan salah satu poin di atas, mohon untuk tidak melanjutkan penggunaan layanan kami. Syarat & Ketentuan ini dapat berubah sewaktu-waktu tanpa pemberitahuan tertulis sebelumnya.
          </p>
        </div>
      </div>
    </div>
  );
}

function TermSection({ title, content }: any) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <CheckCircle size={18} className="text-brand-primary" /> {title}
      </h3>
      <p className="text-slate-400 leading-relaxed">
        {content}
      </p>
    </div>
  );
}
