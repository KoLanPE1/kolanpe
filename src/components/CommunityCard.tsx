import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, BookOpen, Mountain, Video, Coffee, Users, Radio, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CommunityGallery } from './CommunityGallery'
import { CommentSystem } from './CommentSystem'
import { LiveStreamButtons } from './LiveStreamButtons'
import type { Community } from '@/types'

interface CommunityCardProps {
  community: Community
  index: number
}

const typeIcons = {
  gym: Dumbbell,
  study: BookOpen,
  hiking: Mountain,
  content: Video,
  nongkrong: Coffee
}

const typeColors = {
  gym: 'from-orange-500/20 to-red-500/20',
  study: 'from-blue-500/20 to-cyan-500/20',
  hiking: 'from-green-500/20 to-emerald-500/20',
  content: 'from-purple-500/20 to-pink-500/20',
  nongkrong: 'from-amber-500/20 to-yellow-500/20'
}

const galleryImages: Record<string, string[]> = {
  gym: [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80'
  ],
  study: [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80',
    'https://images.unsplash.com/photo-1427504740708-5a0b9ea48107?w=400&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80'
  ],
  hiking: [
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
    'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80'
  ],
  content: [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=400&q=80',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80'
  ],
  nongkrong: [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80',
    'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80'
  ]
}

export function CommunityCard({ community, index }: CommunityCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const Icon = typeIcons[community.type]
  const images = galleryImages[community.type] || []

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
      >
        <div className="relative bg-kolanpe-charcoal rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-kolanpe-lime/30">
          {/* Glow effect on hover */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-kolanpe-lime/10 via-transparent to-kolanpe-lime/5 pointer-events-none"
          />
          
          {/* Cover Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={community.cover_image}
                alt={community.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className={`absolute inset-0 bg-gradient-to-t ${typeColors[community.type]} opacity-60`} />
            <div className="absolute inset-0 bg-gradient-to-t from-kolanpe-charcoal via-transparent to-transparent" />
            
            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                <Icon className="w-3.5 h-3.5" />
                {community.type.charAt(0).toUpperCase() + community.type.slice(1)}
              </span>
            </div>
            
            {/* Member count */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-kolanpe-lime/90 backdrop-blur-sm rounded-full">
                <Users className="w-3.5 h-3.5 text-kolanpe-black" />
                <span className="text-kolanpe-black font-semibold">{120 + index * 45}+</span>
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-kolanpe-lime transition-colors duration-300">
              {community.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
              {community.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Dialog open={showGallery} onOpenChange={setShowGallery}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent border-white/20 text-white hover:bg-kolanpe-lime hover:text-kolanpe-black hover:border-kolanpe-lime transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Community
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-kolanpe-charcoal border-white/10 text-white max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                        <Icon className="w-6 h-6 text-kolanpe-lime" />
                        {community.name}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-8 mt-4">
                      {/* Community Info */}
                      <div className="flex items-start gap-4">
                        <img
                          src={community.cover_image}
                          alt={community.name}
                          className="w-24 h-24 rounded-xl object-cover"
                        />
                        <div>
                          <p className="text-gray-300">{community.description}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-sm text-gray-400">
                              <span className="text-kolanpe-lime font-semibold">{120 + index * 45}+</span> members
                            </span>
                            <span className="text-sm text-gray-400">
                              <span className="text-kolanpe-lime font-semibold">{15 + index * 5}</span> posts this week
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Live Stream Buttons */}
                      <LiveStreamButtons />
                      
                      {/* Gallery */}
                      <CommunityGallery images={images} type={community.type} />
                      
                      {/* Comments */}
                      <CommentSystem communityId={community.id} />
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-kolanpe-lime/10 border-kolanpe-lime/30 text-kolanpe-lime hover:bg-kolanpe-lime hover:text-kolanpe-black transition-all duration-300"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Radio className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom glow line */}
          <motion.div
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scaleX: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-kolanpe-lime to-transparent"
          />
        </div>
      </motion.div>
    </>
  )
}
