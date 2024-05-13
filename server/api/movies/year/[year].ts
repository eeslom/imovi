import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { year } = event.context.params as { year: string }

  const { data } = await supabase.from('movies').select('*').eq('year', Number.parseInt(year))

  return data
})
