<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  title: string
  viewAllUrl: string
  items: Database['public']['Tables']['movies']['Row'][]
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
    <div mb-3>
      <NuxtLink :to="viewAllUrl">
        <TheTitle text-2xl>
          {{ title }}
        </TheTitle>
      </NuxtLink>
    </div>
    <Swiper :breakpoints="breakpoints" :navigation="{ enabled: true }" :modules="[SwiperNavigation]">
      <SwiperSlide v-for="item in items" :key="item.id">
        <Card :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
