<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <li w-full>
    <NuxtLink :to="`/movies/${item.id}-${item.title.toLowerCase().split(' ').join('-')}`">
      <div>
        <NuxtImg w-full format="webp" rounded-lg :src="item.poster_path" :alt="item.title" />
      </div>
      <div>
        <h3 truncate whitespace-normal>
          {{ item.title }}
        </h3>
      </div>
    </NuxtLink>
  </li>
</template>
