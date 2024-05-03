<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Sahifa topilmadi', fatal: true })

useSeoMeta({
  title: page.value.head?.title || page.value.title,
  description: page.value.head?.description || page.value.description,
})

const title = page.value.head?.title || page.value.title
const description = page.value.head?.description || page.value.description
useSeoMeta({
  titleTemplate: '%s · Imovi',
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · Imovi`,
})
</script>

<template>
  <main class="prose" p-4>
    <LazyContentDoc />
  </main>
</template>
