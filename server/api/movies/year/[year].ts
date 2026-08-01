import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { year } = event.context.params as { year: string }
  const { page = 1, pageSize = 16 } = getQuery(event) as { page: number, pageSize: number }

  const offset = (page - 1) * pageSize

  const { data, count } = await supabase
    .from('movies')
    .select('id, title, poster_path', { count: 'exact' })
    .eq('year', Number.parseInt(year))
    .range(offset, offset + pageSize - 1)

  return { data, total: count || 0, page, pageSize }
})
