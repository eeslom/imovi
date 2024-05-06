<script setup lang="ts">
defineProps<{
  item: any
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
