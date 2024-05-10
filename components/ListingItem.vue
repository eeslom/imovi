<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <li relative w-full overflow-hidden rounded bg-light-gray>
    <NuxtLink :to="`/watch/${item.id}`">
      <div h-85 overflow-hidden>
        <NuxtImg format="webp" h-full w-full duration-200 hover:scale-110 quality="80" :src="item.poster_path" :alt="item.title" />
      </div>
      <div px-1 py-3 text-center>
        <h3 sm:text-md truncate whitespace-nowrap text-sm>
          {{ item.title }}
        </h3>
      </div>
    </NuxtLink>
  </li>
</template>
