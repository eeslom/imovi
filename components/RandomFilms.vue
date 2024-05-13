<script setup lang="ts">
const { data: films } = await useFetch('/api/movies/random')

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 1,
  },
}
</script>

<template>
  <div mt-12 pt-4>
    <div>
      <TheTitle text-lg>
        Tasodifiy filmlar
      </TheTitle>
    </div>
    <div mt-2 rounded bg-light-gray p-5 sm:p-3>
      <Swiper
        :breakpoints="breakpoints"
        :pagination="{ clickable: true }" :modules="[SwiperPagination, SwiperA11y]" :style="{ '--swiper-pagination-bullet-inactive-color': 'white', '--swiper-pagination-bullet-inactive-opacity': '1', '--swiper-theme-color': 'rgb(13 148 136)' }"
      >
        <SwiperSlide v-for="film in films" :key="film.id" mb-10 lg:mb-10 sm:mb-0>
          <Card :item="film" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
