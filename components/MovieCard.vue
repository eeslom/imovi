<script setup lang="ts">
defineProps<{
  movie: any
}>()
</script>

<template>
  <div overflow-hidden shadow-md>
    <NuxtImg :src="movie.poster_path" :alt="movie.title" h-80 w-full rounded-lg object-cover />
    <div mb-2 truncate whitespace-nowrap text-xl font-semibold>
      {{ movie.title }}
    </div>
  </div>
</template>
