<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
// const { copy } = useClipboard()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })

console.log(page.value)
</script>

<template>
  <main class="prose">
    <LazyContentDoc>
      <template #not-found>
        <h2 text-center>
          ({{ route.params.slug }}) nomli sahifa topilmadi
        </h2>
      </template>
    </LazyContentDoc>
  </main>
</template>
