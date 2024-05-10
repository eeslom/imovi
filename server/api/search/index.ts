import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { q, limit } = getQuery(event) as { title: string, limit: number }

  const { data } = await supabase.from('movies').select('*').ilike('title', `%${q}%`).limit(limit || 3)

  return data
})
