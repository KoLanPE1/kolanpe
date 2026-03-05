import { motion } from 'framer-motion'
import { CommunityCard } from '@/components/CommunityCard'
import type { Community } from '@/types'

const communities: Community[] = [
  {
    id: '1',
    name: 'Gym Squad',
    description: 'Latihan bareng, saling support, dan bangun badan ideal bersama komunitas gym Lombok.',
    cover_image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    type: 'gym',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Study Circle',
    description: 'Belajar bareng, sharing ilmu, dan grow together untuk masa depan lebih baik.',
    cover_image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    type: 'study',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Hiking Rinjani Crew',
    description: 'Explore keindahan Lombok, muncak bareng, dan nikmati sunrise dari puncak gunung.',
    cover_image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    type: 'hiking',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Creator Lab',
    description: 'Bikin konten kreatif, collab bareng creator Lombok, dan bangun personal branding.',
    cover_image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80',
    type: 'content',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Nongkrong Basecamp',
    description: 'Santai bareng, ngopi, dan connect dengan anak-anak keren Lombok.',
    cover_image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    type: 'nongkrong',
    created_at: new Date().toISOString()
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
}

export function CommunityMomentsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-kolanpe-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-kolanpe-black via-kolanpe-charcoal/30 to-kolanpe-black pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-kolanpe-lime/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-kolanpe-lime/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-kolanpe-black bg-kolanpe-lime rounded-full"
          >
            KoLanPE Community
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Hidupnya Bukan{' '}
            <span className="text-kolanpe-lime">Online Doang.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Kita Gerak. Kita Tumbuh. Kita Bareng.
          </motion.p>
        </motion.div>
        
        {/* Communities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {communities.map((community, index) => (
            <motion.div key={community.id} variants={itemVariants}>
              <CommunityCard community={community} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
