import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const { data, error } = await supabase.from('movies').select('*').order('id', { ascending: true }).limit(3)

  if (error) {
    console.error(error)
    return null
  }

  return data
})
