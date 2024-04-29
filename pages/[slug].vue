<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
// const { copy } = useClipboard()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })

console.log(page.value)

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
  <main class="prose">
    <LazyContentDoc>
      <template #not-found>
        <h2 text-center>
          awd
        </h2>
      </template>
    </LazyContentDoc>
  </main>
</template>
