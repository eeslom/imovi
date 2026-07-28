<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  title: string
  viewAllUrl: string
  items: Database['public']['Tables']['movies']['Row'][]
  posterQuality?: number
}>()

const breakpoints = {
  0: {
    slidesPerView: 1.7,
    spaceBetween: 10,
  },
  380: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  500: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}
</script>

<template>
  <div mt-7>
    <div mb-3 w-full flex items-center justify-between>
      <NuxtLink :to="viewAllUrl">
        <TheTitle text-xl sm:text-2xl>
          {{ title }}
        </TheTitle>
      </NuxtLink>
      <NuxtLink :to="viewAllUrl" whitespace-nowrap icon-btn>
        Barchasini ko'rish <div i-carbon-arrow-right inline-block />
      </NuxtLink>
    </div>
    <Swiper :breakpoints="breakpoints" :navigation="{ enabled: true }" :modules="[SwiperNavigation]">
      <SwiperSlide v-for="item in items" :key="item.id">
        <Card :item="item" :poster-quality="posterQuality" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
