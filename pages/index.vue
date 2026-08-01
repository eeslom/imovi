<script setup lang="ts">
const [movies, cartoons, actions, hindis] = await Promise.all([
  $fetch('/api/movies'),
  $fetch('/api/movies/genres/3'),
  $fetch('/api/movies/genres/1'),
  $fetch('/api/movies/country/Hindiston'),
])
</script>

<template>
  <div>
    <ClientOnly>
      <ListingCarousel title="Eng ko'p ko'rilganlar" view-all-url="/" :items="movies" />
      <ListingCarousel title="Hind kinolari" view-all-url="/movies/country/Hindiston" :items="hindis.data" />
      <ListingCarousel title="Multfilmlar" view-all-url="/movies/genres/3" :items="cartoons.data" />
      <ListingCarousel title="Jangari kinolar" view-all-url="/movies/genres/1" :items="actions.data" />
    </ClientOnly>
  </div>
</template>
