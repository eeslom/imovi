declare interface Movie {
  id: number
  created_at: string
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  genres: number[]
  likes: number
  region: string
  runtime: number
  video: string
  video_provider: 'mover' | 'imovi'
  year: number
}
