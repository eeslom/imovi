<script setup lang="ts">
import { appDescription } from '~/constants'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Sahifa topilmadi', fatal: true })

useSeoMeta({
  title: page.value.head?.title || page.value.title,
  description: appDescription,
})

const title = page.value.head?.title || page.value.title
useSeoMeta({
  titleTemplate: '%s · Imovi',
  title,
  description: appDescription,
  ogDescription: appDescription,
  ogTitle: `${title} · Imovi`,
})
</script>

<template>
  <main class="prose" p-4>
    <LazyContentDoc />
  </main>
</template>
