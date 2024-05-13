<script setup lang="ts">
import { appDescription, appName } from '~/constants'

const { public: { publicUrl } } = useRuntimeConfig()

provideHeadlessUseId(() => useId())

useHead({
  htmlAttrs: { lang: 'uz' },
  title: appName,
})

useSeoMeta({
  ogTitle: appName,
  ogDescription: appDescription,
  ogImage: '/maskable-icon.png',
  ogLocale: 'uz_UZ',
  ogUrl: publicUrl,
  ogLocaleAlternate: ['en_US', 'ru_RU'],
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
</style>
