<script setup lang="ts">
import H3 from './H3.vue'

const { data: films } = await useFetch('/api/movies/random')
</script>

<template>
  <div mt-4>
    <div>
      <H3 text-lg>
        Tasodifiy filmlar
      </H3>
    </div>
    <div mt-1>
      <Swiper
        :slides-per-view="1"
        :pagination="{ clickable: true }" :modules="[SwiperPagination, SwiperA11y]" :style="{ '--swiper-pagination-bullet-inactive-color': 'white', '--swiper-pagination-bullet-inactive-opacity': '1', '--swiper-theme-color': 'rgb(13 148 136)' }"
      >
        <SwiperSlide v-for="film in films" :key="film.id">
          <Card :item="film" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
