import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

interface CommunityGalleryProps {
  images: string[]
  type: string
}

const captions: Record<string, string[]> = {
  gym: ['Workout bareng pagi', 'Personal training session', 'Group fitness class', 'Weight lifting session', 'Cardio challenge'],
  study: ['Diskusi materi', 'Study group session', 'Sharing knowledge', 'Focus time', 'Brainstorming'],
  hiking: ['Sunrise dari puncak', 'Trail adventure', 'Camping bareng', 'Nature exploration', 'Team bonding'],
  content: ['Behind the scenes', 'Content planning', 'Shooting session', 'Editing time', 'Creator meetup'],
  nongkrong: ['Ngopi sore', 'Deep talk', 'Fun moments', 'Chill vibes', 'Friendship goals']
}

export function CommunityGallery({ images, type }: CommunityGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const typeCaptions = captions[type] || []

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
        <span className="w-1 h-5 bg-kolanpe-lime rounded-full" />
        Gallery Kegiatan
      </h4>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-kolanpe-gray"
          >
            <img
              src={image}
              alt={`Activity ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-kolanpe-lime/90 flex items-center justify-center">
                <ZoomIn className="w-5 h-5 text-kolanpe-black" />
              </div>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-white font-medium truncate">
                {typeCaptions[index] || `Activity ${index + 1}`}
              </p>
            </div>
            
            {/* Neon glow on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 rounded-xl ring-2 ring-kolanpe-lime/50 ring-offset-2 ring-offset-kolanpe-charcoal pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
