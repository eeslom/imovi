<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <div>
    <TheTitle mb-3 text-xl>
      {{ item.title }}
    </TheTitle>
    <div relative w-full>
      <div h-full w-full py-3 text-white sm:py-7>
        <div class="backdrop" pointer-events-none absolute left-0 top-0 z--1 h-full w-full>
          <NuxtImg :preload="true" :src="item.backdrop_path" h-full w-full object-cover :alt="item.title" />
        </div>

        <div w-full flex flex-col items-center gap-5 px-5 sm:flex-row>
          <div class="lg:w-1/3">
            <div w-fit overflow-hidden rounded bg-light-gray p-1>
              <NuxtImg :src="item.poster_path" h-90 w-60 object-cover sm:w-70 :alt="item.title" />
            </div>
          </div>
          <div w-full>
            <ul role="list" class="list" h-full w-full space-y-3>
              <li v-if="item.title" class="list__item">
                Nomi: <span>{{ item.title }}</span>
              </li>
              <li v-if="item.genres" class="list__item">
                Janr: <div inline-block font-semibold space-x-2>
                  <span v-for="genre in item.genres" :key="genre">
                    <NuxtLink :to="`/movies/genres/${genre}`">{{ genre }}</NuxtLink>
                  </span>
                </div>
              </li>
              <li v-if="item.region" class="list__item">
                Davlati: <span>
                  <NuxtLink font-semibold :to="`/movies/country/${item.region}`">{{ item.region }}</NuxtLink>
                </span>
              </li>
              <li v-if="item.year" class="list__item">
                Yili: <span><NuxtLink font-semibold :to="`/movies/year/${item.year}`">{{ item.year }}</NuxtLink></span>
              </li>
              <li v-if="item.runtime" class="list__item">
                Davomiyligi: <span>{{ Math.floor(item.runtime / 60) }} soat {{ item.runtime % 60 }} minut</span>
              </li>
              <li v-if="item.age_restricted" class="list__item">
                Yosh Chegarasi: <span><NuxtLink to="/page/age"><NuxtImg inline h-8 w-8 :src="`/images/age/${item.age_restricted}.png`" :alt="`${item.age_restricted}+`" /></NuxtLink></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list__item {
  @apply flex items-center gap-2 px-4 py-2 bg-slate-gray rounded bg-op-70 shadow shadow-slate-gray;
}

.backdrop::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  content: '';
  background: rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

.backdrop::after {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

@media (min-width: 1025px) {
  .backdrop::after {
    background-image: linear-gradient(
      to right,
      #000 0,
      transparent 50%,
      transparent 100%
    );
  }
}
</style>
