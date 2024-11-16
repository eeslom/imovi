<script setup lang="ts">
const movies = await $fetch('/api/movies')
const cartoons = await $fetch('/api/movies/genres/3')
const actions = await $fetch('/api/movies/genres/1')
const hindis = await $fetch('/api/movies/country/Hindiston')
</script>

<template>
  <div>
    <ListingCarousel title="Eng ko'p ko'rilganlar" view-all-url="/" :items="movies" :poster-quality="60" />
    <ListingCarousel title="Hind kinolari" view-all-url="/movies/country/Hindiston" :items="hindis" :poster-quality="60" />
    <ListingCarousel title="Multfilmlar" view-all-url="/movies/genres/3" :items="cartoons" :poster-quality="60" />
    <ListingCarousel title="Jangari kinolar" view-all-url="/movies/genres/1" :items="actions" :poster-quality="60" />
  </div>
</template>
