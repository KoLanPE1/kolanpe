import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Instagram, Gamepad2, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FloatingCommunityChat() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      name: 'Join Discord',
      icon: Gamepad2,
      url: 'https://discord.gg/xxxx',
      color: 'bg-[#5865F2]',
      hoverColor: 'hover:bg-[#4752C4]'
    },
    {
      name: 'Join WhatsApp',
      icon: MessageSquare,
      url: 'https://wa.me/62881027056659',
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#128C7E]'
    },
    {
      name: 'Follow Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
      hoverColor: 'hover:opacity-90'
    }
  ]

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg shadow-kolanpe-lime/20
          transition-all duration-300
          ${isOpen 
            ? 'bg-kolanpe-charcoal border-2 border-kolanpe-lime rotate-90' 
            : 'bg-kolanpe-lime hover:scale-110 hover:shadow-xl hover:shadow-kolanpe-lime/30'
          }
        `}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-kolanpe-lime" />
        ) : (
          <MessageCircle className="w-6 h-6 text-kolanpe-black" />
        )}
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-kolanpe-lime animate-ping opacity-20" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-kolanpe-black flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">3</span>
            </span>
          </>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-80"
          >
            <div className="bg-kolanpe-charcoal rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Header */}
              <div className="relative p-4 bg-gradient-to-r from-kolanpe-lime/20 to-kolanpe-lime/5 border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-kolanpe-lime via-kolanpe-lime/50 to-transparent" />
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-kolanpe-lime flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-kolanpe-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">KoLanPE Community</h4>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kolanpe-lime opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-kolanpe-lime"></span>
                      </span>
                      <span className="text-xs text-gray-400">Online now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <p className="text-sm text-gray-300">
                  Gabung komunitas KoLanPE dan connect dengan anak-anak keren Lombok!
                </p>

                {/* Stats */}
                <div className="flex gap-4 py-3 border-y border-white/5">
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-kolanpe-lime">500+</p>
                    <p className="text-xs text-gray-400">Members</p>
                  </div>
                  <div className="text-center flex-1 border-x border-white/5">
                    <p className="text-lg font-bold text-kolanpe-lime">5</p>
                    <p className="text-xs text-gray-400">Komunitas</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-kolanpe-lime">24</p>
                    <p className="text-xs text-gray-400">Online</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => window.open(link.url, '_blank')}
                        className={`
                          w-full justify-start gap-3
                          bg-transparent border-white/10
                          text-white hover:text-white
                          hover:bg-white/5 hover:border-white/20
                          transition-all duration-300
                        `}
                      >
                        <div className={`w-8 h-8 rounded-lg ${link.color} ${link.hoverColor} flex items-center justify-center transition-colors`}>
                          <link.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="flex-1 text-left">{link.name}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-2 text-center">
                  <p className="text-xs text-gray-500">
                    Made with ❤️ in Lombok
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  )
}
