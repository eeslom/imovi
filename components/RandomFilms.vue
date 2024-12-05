<script setup lang="ts">
defineProps<{ posterQuality?: number }>()

const { data: films } = await useAsyncData('films', () => $fetch('/api/movies/random'))

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  380: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  540: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 1,
    spaceBetween: 5,
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
    <div mt-2 rounded bg-light-gray p-3 md:p-5 xl:p-3>
      <Swiper
        :breakpoints="breakpoints"
        :pagination="{ clickable: true }" :modules="[SwiperPagination, SwiperA11y]" :style="{ '--swiper-pagination-bullet-inactive-color': 'white', '--swiper-pagination-bullet-inactive-opacity': '1', '--swiper-theme-color': 'rgb(13 148 136)' }"
      >
        <SwiperSlide v-for="film in films" :key="film.id" mb-10 lg:mb-8 sm:mb-10>
          <Card :item="film" :poster-quality="posterQuality" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
