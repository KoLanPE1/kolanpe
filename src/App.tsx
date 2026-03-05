import { CommunityMomentsSection } from '@/sections/CommunityMomentsSection'
import { FloatingCommunityChat } from '@/components/FloatingCommunityChat'
import { motion } from 'framer-motion'
import { Zap, Users, TrendingUp, Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-kolanpe-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-kolanpe-charcoal/50 via-kolanpe-black to-kolanpe-black" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-kolanpe-lime/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-kolanpe-lime/5 rounded-full blur-[80px]"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-kolanpe-lime/10 border border-kolanpe-lime/30 rounded-full"
            >
              <Zap className="w-4 h-4 text-kolanpe-lime" />
              <span className="text-sm font-medium text-kolanpe-lime">Komunitas Anak Muda Lombok</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              <span className="text-kolanpe-lime">KoLanPE</span>
              <br />
              <span className="text-white">Community</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Platform komunitas modern untuk anak muda Lombok yang aktif, kreatif, dan saling support.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#communities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kolanpe-lime text-kolanpe-black font-semibold rounded-xl hover:bg-kolanpe-lime/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-kolanpe-lime/20"
              >
                <Users className="w-5 h-5" />
                Jelajahi Komunitas
              </a>
              <a
                href="https://wa.me/62881027056659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-kolanpe-lime/50 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Gabung Sekarang
              </a>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: '500+', label: 'Members', icon: Users },
              { value: '5', label: 'Komunitas', icon: Zap },
              { value: '50+', label: 'Event/Bulan', icon: TrendingUp },
              { value: '100%', label: 'Lokal Lombok', icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-kolanpe-charcoal rounded-xl border border-white/10">
                  <stat.icon className="w-6 h-6 text-kolanpe-lime" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Moments Section */}
      <div id="communities">
        <CommunityMomentsSection />
      </div>

      {/* Footer */}
      <footer className="relative py-16 bg-kolanpe-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-kolanpe-lime mb-4">KoLanPE</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Komunitas anak muda Lombok yang aktif di berbagai kegiatan positif. 
                Gym bareng, belajar bareng, hiking, bikin konten, dan nongkrong asik.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Discord', 'WhatsApp'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-kolanpe-black flex items-center justify-center text-gray-400 hover:text-kolanpe-lime hover:bg-kolanpe-lime/10 transition-all duration-300"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Komunitas</h4>
              <ul className="space-y-2">
                {['Gym Squad', 'Study Circle', 'Hiking Crew', 'Creator Lab', 'Basecamp'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-kolanpe-lime transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lombok, NTB</li>
                <li>+62 881-0270-56659</li>
                <li>hello@kolanpe.id</li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 KoLanPE Community. Made with ❤️ in Lombok.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-kolanpe-lime text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-kolanpe-lime text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat */}
      <FloatingCommunityChat />
    </div>
  )
}

export default App
