import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex p-3 bg-brand-accent/10 rounded-2xl text-brand-accent mb-4">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kebijakan <span className="text-brand-accent">Privasi</span></h1>
          <p className="text-slate-400">Pembaruan terakhir: 16 Mei 2026. Kami berkomitmen untuk melindungi informasi pribadi Anda.</p>
        </motion.div>

        <div className="space-y-12">
          <Section 
            icon={<Eye size={24} />}
            title="Informasi yang Kami Kumpulkan"
            content="Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat Anda membuat akun, melakukan pembelian, atau menghubungi tim dukungan. Ini termasuk nama, alamat email, nomor telepon, dan detail User ID game Anda."
          />
          <Section 
            icon={<Lock size={24} />}
            title="Penggunaan Informasi"
            content="Informasi Anda digunakan untuk memproses transaksi, mengirimkan voucher digital, memberikan dukungan pelanggan, dan mengirimkan informasi promosi (jika Anda menyetujuinya). Kami tidak akan pernah menjual data pribadi Anda kepada pihak ketiga."
          />
          <Section 
            icon={<Shield size={24} />}
            title="Keamanan Data"
            content="Kami menerapkan berbagai langkah keamanan teknis dan organisasi untuk melindungi data Anda. Data pembayaran diproses melalui penyedia layanan pembayaran resmi yang bersertifikat PCI-DSS untuk memastikan keamanan transaksi."
          />
          <Section 
            icon={<FileText size={24} />}
            title="Hak Anda"
            content="Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan pun. Silakan hubungi tim dukungan kami jika Anda ingin mengajukan permintaan terkait data Anda."
          />
        </div>

        <div className="mt-20 glass p-10 rounded-3xl border border-white/5 bg-brand-accent/5">
          <h3 className="text-2xl font-bold mb-4">Persetujuan</h3>
          <p className="text-slate-400 leading-relaxed">
            Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam Kebijakan Privasi ini. Kebijakan ini dapat berubah sewaktu-waktu, dan kami akan memberi tahu Anda jika ada perubahan signifikan.
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, content }: any) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-1 text-brand-accent">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-lg">
        {content}
      </p>
    </div>
  );
}
