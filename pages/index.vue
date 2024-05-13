<script setup lang="ts">
const { data: movies } = await useFetch('/api/movies')
</script>

<template>
  <div>
    <ListingCarousel title="Eng ko'p ko'rilganlar" :items="movies" />
  </div>
</template>
