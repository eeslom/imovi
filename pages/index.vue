<script setup lang="ts">
const { data: movies } = await useFetch('/api/movies')
const { data: genres } = await useFetch('/api/genres')

const breakpoints = {
  320: {
    slidesPerView: 3.1,
  },
  600: {
    slidesPerView: 3.3,
  },
  700: {
    slidesPerView: 5.3,
  },
  991: {
    slidesPerView: 6.3,
  },
  1110: {
    slidesPerView: 6.3,
  },
  1240: {
    slidesPerView: 7.5,
  },
  1600: {
    slidesPerView: 8.3,
  },
}
</script>

<template>
  <div p-4>
    <Swiper :breakpoints="breakpoints" space-between="10" :css-mode="true" mb-4>
      <SwiperSlide v-for="genre in genres" :key="genre.id" text-center capitalize>
        <NuxtLink :to="`/genre/${genre.id}`" block rounded bg-light-gray px-4 py-2>
          {{ genre.name }}
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
    <Listing title="Eng ko'p ko'rilganlar" :items="movies" />
  </div>
</template>
