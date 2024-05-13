<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  item: Database['public']['Tables']['movies']['Row']
}>()
</script>

<template>
  <div relative w-full>
    <div h-full w-full text-white sm:py-5>
      <TheTitle text-xl>
        {{ item.title }}
      </TheTitle>
      <div sm:p-10>
        <NuxtImg :src="item.poster_path" object-cover :alt="item.title" />
        <p line-clamp-4>
          {{ item.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  content: '';
  background: rgba(0, 0, 0, 0.75);
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

.hero::after {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

@media (min-width: 1025px) {
  .hero::after {
    background-image: linear-gradient(
      to right,
      #000 0,
      transparent 50%,
      transparent 100%
    );
  }
}
</style>
