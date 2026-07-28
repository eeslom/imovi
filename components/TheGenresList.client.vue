<script setup lang="ts">
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
  <Swiper :breakpoints="breakpoints" space-between="10" mb-4>
    <SwiperSlide v-for="genre in genres" :key="genre.id" text-center capitalize>
      <NuxtLink :to="`/movies/genres/${genre.id}`" block rounded bg-slate-gray px-4 py-2>
        {{ genre.name }}
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>
