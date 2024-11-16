<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
  posterQuality?: number
}>()
</script>

<template>
  <li relative w-full select-none overflow-hidden rounded-xl bg-slate-gray :title="item.title">
    <NuxtLink :to="`/watch/${item.id}`" h-full w-full>
      <div class="group">
        <div z-100 w-full overflow-hidden>
          <NuxtImg format="webp" :quality="posterQuality || 100" loading="eager" h-65 w-full object-cover duration-200 lg:h-75 sm:h-70 group-hover:scale-105 :src="item.poster_path" :alt="item.title" />
        </div>
        <div w-full p-2 text-center sm:p-2.5>
          <h3 line-clamp-1 text-balance text-sm>
            {{ item.title }}
          </h3>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
