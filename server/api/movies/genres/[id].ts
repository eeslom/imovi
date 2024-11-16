import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { id } = event.context.params as { id: string }
  const { page = 1, pageSize = 16 } = getQuery(event) as { page: number, pageSize: number }

  const offset = (page - 1) * pageSize

  const { data } = await supabase.from('movies').select('id, title, poster_path').contains('genres', [id]).range(offset, offset + pageSize - 1)

  return data
})
