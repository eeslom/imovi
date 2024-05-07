<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <NuxtLink :to="`/movies/${item.id}-${item.title.toLowerCase().split(' ').join('-')}`">
    <div>
      <div>
        <img rounded-lg :src="item.poster_path" :alt="item.title">
      </div>
      <div>
        <h3 truncate whitespace-normal>
          {{ item.title }}
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>
