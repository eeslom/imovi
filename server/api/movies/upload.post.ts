import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (e) => {
  const supabase = await serverSupabaseClient(e)

  const { title, overview, poster_path, backdrop_path, year, genres, video, region, runtime } = getQuery(e) as { title: string, overview: string, poster_path: string, backdrop_path: string, year: number, video: string, runtime: number, region: string, genres: any }

  const data = await supabase.from('movies').insert({
    title,
    overview,
    poster_path,
    backdrop_path,
    year,
    genres,
    video,
    region,
    runtime,
  })

  return data
})
