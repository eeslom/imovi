import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }

    return array
  }

  try {
    const { data } = await supabase.from('movies').select('id, title, poster_path')

    const shuffledDocuments = shuffleArray(data).splice(0, 4)

    return shuffledDocuments
  }
  catch (error) {
    return error
  }
})
