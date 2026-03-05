import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import type { Comment, User as UserType } from '@/types'

interface CommentSystemProps {
  communityId: string
}

// Mock users for demo
const mockUsers: UserType[] = [
  { id: '1', username: 'Ahmad_Lombok', avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', bio: 'Gym enthusiast', created_at: new Date().toISOString() },
  { id: '2', username: 'Siti_Creative', avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', bio: 'Content creator', created_at: new Date().toISOString() },
  { id: '3', username: 'Rian_Hiker', avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', bio: 'Mountain lover', created_at: new Date().toISOString() },
  { id: '4', username: 'Maya_Study', avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', bio: 'Book worm', created_at: new Date().toISOString() },
  { id: '5', username: 'Dika_Nongkrong', avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', bio: 'Coffee lover', created_at: new Date().toISOString() }
]

// Mock initial comments
const mockComments: Comment[] = [
  { id: '1', post_id: '1', user_id: '1', comment: 'Gasss join gym bareng minggu ini! 💪', created_at: new Date(Date.now() - 3600000).toISOString(), user: mockUsers[0] },
  { id: '2', post_id: '1', user_id: '2', comment: 'Seru banget komunitasnya, banyak belajar!', created_at: new Date(Date.now() - 7200000).toISOString(), user: mockUsers[1] },
  { id: '3', post_id: '1', user_id: '3', comment: 'Next hiking kapan nih? 🏔️', created_at: new Date(Date.now() - 10800000).toISOString(), user: mockUsers[2] }
]

export function CommentSystem({ communityId }: CommentSystemProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const commentsEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new comments added
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [comments])

  // Simulate realtime subscription
  useEffect(() => {
    // In production, this would be a real Supabase subscription
    // const subscription = supabase
    //   .channel(`comments:${communityId}`)
    //   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, payload => {
    //     setComments(prev => [...prev, payload.new as Comment])
    //   })
    //   .subscribe()
    
    // return () => {
    //   subscription.unsubscribe()
    // }
  }, [communityId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    const comment: Comment = {
      id: Date.now().toString(),
      post_id: communityId,
      user_id: 'current-user',
      comment: newComment.trim(),
      created_at: new Date().toISOString(),
      user: {
        id: 'current-user',
        username: 'You',
        avatar_url: null,
        bio: null,
        created_at: new Date().toISOString()
      }
    }

    setComments(prev => [...prev, comment])
    setNewComment('')
    setIsSubmitting(false)

    // In production, this would insert to Supabase
    // await supabase.from('comments').insert(comment)
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (minutes < 1) return 'Baru saja'
    if (minutes < 60) return `${minutes}m lalu`
    if (hours < 24) return `${hours}j lalu`
    return `${days}h lalu`
  }

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
        <span className="w-1 h-5 bg-kolanpe-lime rounded-full" />
        Diskusi Komunitas
        <span className="text-sm font-normal text-gray-400">({comments.length})</span>
      </h4>
      
      {/* Comments List */}
      <div className="bg-kolanpe-black/50 rounded-xl p-4 max-h-80 overflow-y-auto space-y-4">
        <AnimatePresence mode="popLayout">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
              className="flex gap-3 group"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                {comment.user?.avatar_url ? (
                  <img
                    src={comment.user.avatar_url}
                    alt={comment.user.username}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-kolanpe-lime/20"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-kolanpe-charcoal flex items-center justify-center ring-2 ring-kolanpe-lime/20">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
              
              {/* Comment Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">
                    {comment.user?.username}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatTime(comment.created_at)}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed break-words">
                  {comment.comment}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={commentsEndRef} />
      </div>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Tulis komentar..."
          className="flex-1 min-h-[44px] max-h-32 bg-kolanpe-charcoal border-white/10 text-white placeholder:text-gray-500 resize-none focus:border-kolanpe-lime/50 focus:ring-kolanpe-lime/20"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit(e)
            }
          }}
        />
        <Button
          type="submit"
          disabled={isSubmitting || !newComment.trim()}
          className="bg-kolanpe-lime text-kolanpe-black hover:bg-kolanpe-lime/90 disabled:opacity-50 disabled:cursor-not-allowed px-4"
        >
          <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
        </Button>
      </form>
      
      {/* Realtime indicator */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kolanpe-lime opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-kolanpe-lime"></span>
        </span>
        Live - Komentar realtime aktif
      </div>
    </div>
  )
}
