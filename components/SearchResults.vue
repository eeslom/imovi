<script setup lang="ts">
defineProps<{
  results: { id: number, poster_path: string, title: string, year: number, genres: number[] }[]
}>()

const searchStore = useSearchStore()

// async function getGenreName(genre_id: number) {
//   const genre = await $fetch(`/api/genres/${genre_id}`)

//   console.log(genre)
// }
</script>

<template>
  <div mt-4>
    <ul v-if="results && results.length" w-full overflow-hidden rounded-t bg-slate-gray divide-y divide-gray-600>
      <li v-for="item in results" :key="item.id" @click="searchStore.close">
        <NuxtLink :to="`/watch/${item.id}`">
          <div flex items-center justify-between p-3 sm:p-4>
            <div flex items-center gap-5>
              <div>
                <NuxtImg v-if="item.poster_path" :src="item.poster_path" h-20 :alt="item.title" object-cover />
                <div v-else bg-darkgray h-20 w-10 />
              </div>
              <div>
                <div>
                  <span>
                    {{ item.title }}
                  </span>
                </div>
                <div space-x-2>
                  <span>
                    {{ item.year }}
                  </span>
                  <span>/</span>
                  <div inline-block space-x-2>
                    <span v-for="genre in item.genres" :key="genre">
                      {{ genre }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
