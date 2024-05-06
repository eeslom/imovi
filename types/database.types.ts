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
      comments: {
        Row: {
          id: number
          created_at: string
          comment: string
          movie_id: number
          user_id: string
        }
        Insert: {
          comment: string
          movie_id: number
          user_id: string
        }
        Update: {
          comment?: string
          movie_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'comments_movie_id_fkey'
            columns: ['movie_id']
            isOneToOne: false
            referencedRelation: 'movies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      genres: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      movies: {
        Row: {
          backdrop_path: string
          created_at: string
          genres: number[]
          id: number
          likes: number
          overview: string
          poster_path: string
          region: string
          runtime: number
          title: string
          video: string
          video_provider: Database['public']['Enums']['video_provider']
          year: number
        }
        Insert: {
          backdrop_path: string
          genres: number[]
          overview: string
          poster_path: string
          region: string
          runtime: number
          title: string
          video: string
          year: number
        }
        Update: {
          backdrop_path?: string
          genres?: number[]
          overview?: string
          poster_path?: string
          region?: string
          runtime?: number
          title?: string
          video?: string
          video_provider?: Database['public']['Enums']['video_provider']
          year?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      video_provider: 'mover' | 'imovi'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
  Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
  PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
    PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema['Enums']
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
