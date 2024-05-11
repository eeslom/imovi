<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <li relative w-full overflow-hidden rounded bg-light-gray :title="item.title">
    <NuxtLink :to="`/watch/${item.id}`" contents h-full w-full>
      <div z-100 w-full overflow-hidden>
        <NuxtImg format="webp" h-65 w-full object-cover lg:h-80 sm:h-70 quality="80" :src="item.poster_path" :alt="item.title" />
      </div>
      <div w-full p-2 text-center sm:p-2.5>
        <h3 text-sm>
          {{ item.title }}
        </h3>
      </div>
    </NuxtLink>
  </li>
</template>
