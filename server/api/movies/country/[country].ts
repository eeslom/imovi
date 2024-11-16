import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { country } = event.context.params as { country: string }

  const { data } = await supabase.from('movies').select('id, title, poster_path').eq('region', country)

  return data
})
