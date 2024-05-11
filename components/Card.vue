<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <li relative w-full overflow-hidden rounded bg-light-gray>
    <NuxtLink :to="`/watch/${item.id}`" h-full w-full>
      <div z-100 w-full overflow-hidden>
        <NuxtImg h-80 format="webp" w-full object-cover quality="80" :src="item.poster_path" :alt="item.title" />
      </div>
      <div p-3 text-center>
        <h3 sm:text-md line-clamp-2 text-sm>
          {{ item.title }}
        </h3>
      </div>
    </NuxtLink>
  </li>
</template>
