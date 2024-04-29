import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (e) => {
  const supabase = await serverSupabaseClient(e)

  const { page } = getQuery(e) as { page: number }

  const { data } = await supabase.from('movies').select('*')

  return {
    page: page || 1,
    results: data,
  }
})
