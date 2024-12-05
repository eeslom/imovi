<script setup lang="ts">
const route = useRoute()

const { id } = route.params as { id: number }

const item = await $fetch(`/api/movies/${id}`)

useHead({
  title: item?.title,
})

useSeoMeta({
  title: item?.title,
  ogImage: item?.poster_path,
  ogType: 'video.movie',
})

onBeforeMount(() => {
  if (!item) {
    navigateTo('/:all(.*)*')
  }
})
</script>

<template>
  <div v-if="item">
    <Head>
      <Meta v-if="item" name="keywords" :content="`${item.title.split(' ').join(', ')}, kino, serial, multfilm, imovi, anime, animelar, multfilmlar, seriallar, filmlar, ko'rish, tas-ix, iptv, uzbek, o'zbek, tilida`" />
    </Head>
    <TheDetails :item="item" />
    <HeadlessTabGroup as="div" mt-5>
      <HeadlessTabList>
        <HeadlessTab v-if="item.video" v-slot="{ selected }" as="template">
          <button rounded-t px-4 py-2 text-sm font-semibold uppercase outline-none :class="[selected ? 'bg-light-gray' : 'bg-dark-gray']">
            onlayn ko'rish
          </button>
        </HeadlessTab>
        <HeadlessTab v-if="item.trailer" v-slot="{ selected }" as="template">
          <button rounded-t px-4 py-2 text-sm font-semibold uppercase outline-none :class="[selected ? 'bg-light-gray' : 'bg-dark-gray']">
            treylerini ko'rish
          </button>
        </HeadlessTab>
      </HeadlessTabList>
      <HeadlessTabPanels>
        <HeadlessTabPanel v-if="item.video">
          <iframe :src="item.video" frameborder="0" class="w-9/10" allowfullscreen aspect-ratio-video w-full />
        </HeadlessTabPanel>
        <HeadlessTabPanel v-if="item.trailer">
          <iframe :src="item.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen aspect-ratio-video w-full />
        </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
    <MovieComments :movie-id="Number(id)" />
  </div>
</template>
