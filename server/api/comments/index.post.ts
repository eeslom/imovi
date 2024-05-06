import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const user = await serverSupabaseUser(event)
  const { comment, movie_id } = await readBody(event)

  try {
    if (user)
      await supabase.from('comments').insert({ comment, user_id: user.id, movie_id })
  }
  catch (error) {
    return error
  }
})
