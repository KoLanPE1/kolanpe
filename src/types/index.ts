export interface Community {
  id: string
  name: string
  description: string
  cover_image: string
  type: 'gym' | 'study' | 'hiking' | 'content' | 'nongkrong'
  created_at: string
}

export interface User {
  id: string
  username: string
  avatar_url: string | null
  bio: string | null
  created_at: string
}

export interface Post {
  id: string
  community_id: string
  user_id: string
  image_url: string
  caption: string
  created_at: string
  user?: User
}

export interface Comment {
  id: string
  post_id: string
  user_id: string
  comment: string
  created_at: string
  user?: User
}

export interface GalleryImage {
  id: string
  url: string
  caption: string
}
