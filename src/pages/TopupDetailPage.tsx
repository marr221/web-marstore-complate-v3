import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, ChevronLeft, Send, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { SITE_CONFIG, GAME_DETAILS } from '../config';

export default function TopupDetailPage() {
  const { slug } = useParams();
  const game = GAME_DETAILS[slug || ''] || {
      name: slug?.replace('-', ' ').toUpperCase() || 'Unknown Game',
      icon: '🎮',
      banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format',
      items: [
          { id: 1, name: 'Minimal Top-up', price: 'Hubungi Admin' }
      ],
      fields: [{ id: 'id', label: 'ID Game', placeholder: 'Masukkan ID anda' }]
  };

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleBuy = () => {
    if (!selectedItem) {
        alert('Pilih item terlebih dahulu!');
        return;
    }
    
    let info = '';
    Object.entries(formData).forEach(([key, val]) => {
        info += `${key}: ${val}\n`;
    });

    const message = `Halo Admin ${SITE_CONFIG.name}, saya ingin top up ${game.name}:\n\nItem: ${selectedItem.name}\nHarga: ${selectedItem.price}\n${info}`;
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={game.banner} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 to-transparent" />
        <div className="absolute bottom-10 left-6 md:left-12 flex items-end gap-6">
            <div className="text-7xl bg-surface-800 p-6 rounded-3xl border border-white/10 shadow-2xl">
                {game.icon}
            </div>
            <div className="mb-2">
                <Link to="/topup" className="text-brand-accent flex items-center gap-1 text-sm font-bold mb-2 hover:underline">
                    <ChevronLeft size={16} /> Kembali
                </Link>
                <h1 className="text-4xl font-black">{game.name}</h1>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-8 -mt-6 relative z-10">
        {/* Left: Input Form */}
        <div className="lg:col-span-1 space-y-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 rounded-3xl border border-white/10"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold">1. Masukkan Data</h3>
                </div>
                <div className="space-y-4">
                    {game.fields.map((field: any) => (
                        <div key={field.id}>
                            <label className="block text-sm font-bold text-slate-400 mb-2">{field.label}</label>
                            <input 
                                type="text"
                                placeholder={field.placeholder}
                                onChange={(e) => setFormData({...formData, [field.label]: e.target.value})}
                                className="w-full glass border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent transition-colors"
                            />
                        </div>
                    ))}
                    <p className="text-[10px] text-slate-500 italic">
                        Pastikan data yang anda masukkan sudah benar. Kesalahan input bukan tanggung jawab kami.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10"
            >
                <div className="flex items-center gap-3 mb-4 text-green-400">
                    <ShieldCheck size={20} />
                    <h4 className="font-bold">Layanan Terpercaya</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                    Proses otomatis dan cepat. Ribuan transaksi sudah berhasil diproses setiap harinya.
                </p>
            </motion.div>
        </div>

        {/* Right: Item Selection & Order */}
        <div className="lg:col-span-2 space-y-6">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-8 rounded-3xl border border-white/10"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-brand-primary/20 p-2 rounded-lg text-brand-primary">
                        <CreditCard size={20} />
                    </div>
                    <h3 className="text-xl font-bold">2. Pilih Nominal</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {game.items.map((item: any) => (
                        <div 
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer text-center relative overflow-hidden ${
                                selectedItem?.id === item.id 
                                ? 'bg-brand-primary/10 border-brand-primary shadow-lg shadow-brand-primary/5' 
                                : 'glass border-white/5 hover:border-white/20'
                            }`}
                        >
                            <p className={`font-bold mb-1 ${selectedItem?.id === item.id ? 'text-brand-primary' : 'text-slate-200'}`}>
                                {item.name}
                            </p>
                            <p className="text-xs text-slate-500">{item.price}</p>
                            {selectedItem?.id === item.id && (
                                <motion.div 
                                    layoutId="check"
                                    className="absolute -top-1 -right-1 w-6 h-6 bg-brand-primary text-surface-900 rounded-bl-xl flex items-center justify-center"
                                >
                                    <Send size={12} fill="currentColor" />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <div>
                   <h4 className="text-slate-400 text-sm font-bold mb-1">Total Pembayaran</h4>
                   <p className="text-3xl font-black text-white">{selectedItem ? selectedItem.price : 'Pilih Nominal'}</p>
                </div>
                <button 
                    onClick={handleBuy}
                    disabled={!selectedItem}
                    className={`w-full md:w-auto px-12 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all ${
                        selectedItem 
                        ? 'bg-brand-primary text-surface-900 hover:scale-105 shadow-xl shadow-brand-primary/20' 
                        : 'bg-white/5 text-slate-500 grayscale cursor-not-allowed'
                    }`}
                >
                    <Send size={20} />
                    BELI SEKARANG
                </button>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
