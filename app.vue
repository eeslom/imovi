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
      href: 'https://image.tmdb.org',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://v.mover.uz',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://i.mover.uz',
    },
    {
      rel: 'preconnect',
      href: 'https://gauokzjbwdzovotccymx.supabase.co',
    },
  ],
  meta: [
    { name: 'description', content: appDescription },
  ],
  script: [
    {
      src: 'https://yandex.ru/ads/system/context.js',
      async: true,
    },
    {
      'data-page-id': 19738945,
      'src': 'https://yandex.ru/ads/system/ap-loader.js',
      'async': true,
    },
  ],
})

useSeoMeta({
  ogTitle: appName,
  ogDescription: appDescription,
  ogImage: '/maskable-icon.png',
  ogLocale: 'uz_UZ',
  ogUrl: 'https://imovi.uz',
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
  height: 100dvh;
  margin: 0;
  padding: 0;
}

html {
  background: #222;
  color: white;
}
</style>
