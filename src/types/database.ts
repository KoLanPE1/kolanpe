export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string
          avatar_url: string | null
          bio: string | null
          created_at: string
        }
        Insert: {
          id?: string
          username: string
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          username?: string
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
        }
      }
      communities: {
        Row: {
          id: string
          name: string
          description: string
          cover_image: string
          type: 'gym' | 'study' | 'hiking' | 'content' | 'nongkrong'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          cover_image: string
          type: 'gym' | 'study' | 'hiking' | 'content' | 'nongkrong'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          cover_image?: string
          type?: 'gym' | 'study' | 'hiking' | 'content' | 'nongkrong'
          created_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          community_id: string
          user_id: string
          image_url: string
          caption: string
          created_at: string
        }
        Insert: {
          id?: string
          community_id: string
          user_id: string
          image_url: string
          caption: string
          created_at?: string
        }
        Update: {
          id?: string
          community_id?: string
          user_id?: string
          image_url?: string
          caption?: string
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          user_id: string
          comment: string
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          user_id: string
          comment: string
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          user_id?: string
          comment?: string
          created_at?: string
        }
      }
    }
  }
}
