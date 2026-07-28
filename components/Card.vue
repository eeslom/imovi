<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
  posterQuality?: number
}>()
</script>

<template>
  <li relative w-full select-none overflow-hidden rounded-lg border="~ white/30" bg-gray:10 :title="item.title">
    <NuxtLink :to="`/watch/${item.id}`" h-full w-full>
      <div class="group">
        <div z-100 w-full overflow-hidden>
          <img decoding="async" loading="lazy" h-65 w-full object-cover duration-200 lg:h-75 sm:h-70 group-hover:scale-105 :src="`https://wsrv.nl?url=${item.poster_path}&output=webp&q=75&n=-1`" :alt="item.title" />
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
