import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Gamepad2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LiveStreamButtons() {
  const liveLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
      hoverColor: 'hover:from-purple-500/30 hover:to-pink-500/30',
      borderColor: 'border-purple-500/30'
    },
    {
      name: 'Discord',
      icon: Gamepad2,
      url: 'https://discord.gg/xxxx',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20',
      hoverColor: 'hover:from-indigo-500/30 hover:to-blue-500/30',
      borderColor: 'border-indigo-500/30'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/62881027056659',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
      hoverColor: 'hover:from-green-500/30 hover:to-emerald-500/30',
      borderColor: 'border-green-500/30'
    }
  ]

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
        <span className="w-1 h-5 bg-kolanpe-lime rounded-full" />
        Join Live Stream
      </h4>
      
      <div className="flex flex-wrap gap-3">
        {liveLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              onClick={() => window.open(link.url, '_blank')}
              className={`
                relative overflow-hidden group
                ${link.bgColor} ${link.hoverColor}
                border ${link.borderColor}
                text-white hover:text-white
                transition-all duration-300
              `}
            >
              {/* Animated gradient background */}
              <div className={`
                absolute inset-0 bg-gradient-to-r ${link.color} 
                opacity-0 group-hover:opacity-20 
                transition-opacity duration-300
              `} />
              
              {/* Live indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              
              <link.icon className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">{link.name}</span>
              <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity relative z-10" />
            </Button>
          </motion.div>
        ))}
      </div>
      
      {/* Live status */}
      <div className="flex items-center gap-3 p-3 bg-kolanpe-black/50 rounded-lg">
        <div className="flex -space-x-2">
          {[
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
          ].map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt={`User ${i + 1}`}
              className="w-8 h-8 rounded-full border-2 border-kolanpe-charcoal object-cover"
            />
          ))}
        </div>
        <div className="flex-1">
          <p className="text-sm text-white font-medium">24 orang sedang live</p>
          <p className="text-xs text-gray-400">Gabung sekarang dan ikut seru-seruan!</p>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/20 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-xs text-red-400 font-medium">LIVE</span>
        </div>
      </div>
    </div>
  )
}
