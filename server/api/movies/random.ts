import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  try {
    const { data } = await supabase.from('movies').select('*').order('random()')
    return data
  }
  catch (error) {
    return error
  }
})
