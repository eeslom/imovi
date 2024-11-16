import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { q, limit } = getQuery(event) as { q: string, limit: number }

  const { data } = await supabase.from('movies').select('id, title, poster_path, genres, year').ilike('title', `%${q}%`.trim()).eq('is_shown', true).limit(limit || 3)

  return data
})
