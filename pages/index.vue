<script setup lang="ts">
const { data: movies } = await useFetch('/api/movies')
const { data: cartoons } = await useFetch('/api/movies/genres/3')
const { data: actions } = await useFetch('/api/movies/genres/1')
</script>

<template>
  <div>
    <ListingCarousel title="Eng ko'p ko'rilganlar" view-all-url="/" :items="movies" />
    <ListingCarousel title="Multfilmlar" view-all-url="/movies/genres/3" :items="cartoons" />
    <ListingCarousel title="Jangari kinolar" view-all-url="/movies/genres/1" :items="actions" />
  </div>
</template>
