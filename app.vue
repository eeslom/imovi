<script setup lang="ts">
import { appDescription, appName } from '~/constants'

provideHeadlessUseId(() => useId())

useHead({
  htmlAttrs: { lang: 'uz' },
  title: appName,
  link: [
    {
      rel: 'preconnect',
      href: 'https://wsrv.nl',
    },
    {
      rel: 'preconnect',
      href: 'https://v.mover.uz',
    },
    {
      rel: 'preconnect',
      href: 'https://gauokzjbwdzovotccymx.supabase.co',
    },
  ],
  meta: [
    { name: 'description', content: appDescription },
  ]
})

useSeoMeta({
  ogTitle: appName,
  ogDescription: appDescription,
  ogImage: '/maskable-icon.png',
  ogLocale: 'uz_UZ',
  ogUrl: 'https://www.imovi.uz',
  ogLocaleAlternate: ['en_US', 'ru_RU'],
  ogSiteName: 'Imovi',
  ogType: 'website',
})
</script>

<template>
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
