<script setup lang="ts">
const { data: films } = await useFetch('/api/movies/random')
</script>

<template>
  <div>
    <div>
      <h3>Tasodifiy filmlar</h3>
    </div>
    <div>
      <Swiper
        :slides-per-view="1"
        :pagination="{ clickable: true }" :modules="[SwiperPagination, SwiperA11y]" :style="{ '--swiper-pagination-bullet': '#fff' }"
      >
        <SwiperSlide v-for="film in films" :key="film.id">
          <NuxtImg :src="film.poster_path" :alt="film.title" h-85 />
        </SwiperSlide>
      </Swiper>
    </div>
    awdawd
  </div>
</template>

<style>
:root {
  --swiper-theme-color: rgb(13 148 136);
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-inactive-color: white;
}
</style>
