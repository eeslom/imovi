<script setup lang="ts">
import { appName } from '~/constants'

provideHeadlessUseId(() => useId())

useHead({
  htmlAttrs: { lang: 'uz' },
  title: appName,
})

useSeoMeta({
  ogSiteName: 'Imovi',
  ogType: 'website',
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator color="#0D9488" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  background: #222;
  color: white;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
