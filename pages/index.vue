<script setup lang="ts">
const { data: movies } = await useAsyncData('movies', () => $fetch('/api/movies'))
const { data: cartoons } = await useAsyncData('cartoons', () => $fetch('/api/movies/genres/3'))
const { data: actions } = await useAsyncData('actions', () => $fetch('/api/movies/genres/1'))
</script>

<template>
  <div>
    <ListingCarousel title="Eng ko'p ko'rilganlar" view-all-url="/" :items="movies" />
    <ListingCarousel title="Multfilmlar" view-all-url="/movies/genres/3" :items="cartoons" />
    <ListingCarousel title="Jangari kinolar" view-all-url="/movies/genres/1" :items="actions" />
  </div>
</template>
