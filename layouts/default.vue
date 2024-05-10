<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
  <main>
    <SpeedInsights />
    <AppNavbar />
    <div mx-auto max-w-7xl gap-5 lg:grid lg:grid-cols-5>
      <div lg:col-span-4>
        <slot />
      </div>
      <LazyRandomFilms lg:col-span-1 />
    </div>
    <AppFooter />
  </main>
</template>
