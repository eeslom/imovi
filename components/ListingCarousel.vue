<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  title: string
  items: Database['public']['Tables']['movies']['Row'][]
}>()

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}
</script>

<template>
  <div>
    <div mb-3>
      <TheTitle text-2xl>
        {{ title }}
      </TheTitle>
    </div>
    <Swiper :breakpoints="breakpoints" :navigation="{ enabled: true }" :modules="[SwiperNavigation]">
      <SwiperSlide v-for="item in items" :key="item.id">
        <Card :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
