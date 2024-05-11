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
  <main class="prose" my-5 max-w-full rounded bg-dark-gray sm:my-10>
    <div py-5>
      <div>
        <H3>
          {{ title }}
        </H3>
      </div>
      <div mt-4>
        <LazyContentDoc px-10 />
      </div>
    </div>
  </main>
</template>

<style>
table {
  border-collapse: collapse;
}

td,
th,
tr {
  border: 1px solid gray;
  padding: 8px;
}
</style>
