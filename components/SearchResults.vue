<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  results: Database['public']['Tables']['movies']['Row'][]
}>()

const searchStore = useSearchStore()

const supabase = useSupabaseClient<Database>()

async function getGenreName(genre_id: number) {
  const { data } = await supabase.from('genres').select('*').eq('id', genre_id).single()

  return data
}
</script>

<template>
  <div mt-4>
    <ul w-full overflow-hidden rounded bg-slate-gray divide-y divide-gray-600>
      <li v-for="item in results" :key="item.id" @click="searchStore.close">
        <NuxtLink :to="`/watch/${item.id}`">
          <div flex items-center justify-between p-4>
            <div flex items-center gap-5>
              <NuxtImg :src="item.poster_path" h-20 :alt="item.title" object-cover />
              <div>
                <div>
                  <span>
                    {{ item.title }}
                  </span>
                </div>
                <div>
                  <span>
                    {{ item.year }}
                  </span>
                  /
                  <span v-for="genre in item.genres" :key="genre">
                    {{ getGenreName(genre) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
