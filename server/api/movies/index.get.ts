import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { page = 1, pageSize = 16 } = getQuery(event) as { page: number, pageSize: number }

  const offset = (page - 1) * pageSize

  const { data } = await supabase.from('movies').select('*').range(offset, offset + pageSize - 1)

  return data
})
