<script setup lang="ts">
const route = useRoute()

const { id } = route.params as { id: number }

const { data: item } = useFetch(`/api/movies/${id}`)
</script>

<template>
  <div v-if="item">
    <Head>
      <Meta v-if="item" name="keywords" :content="`${item.title.split(' ').join(', ')}, kino, serial, multfilm, imovi, anime, animelar, multfilmlar, seriallar, filmlar, ko'rish, tas-ix, iptv, uzbek, o'zbek, tilida`" />
    </Head>
    {{ item.title }}
    <HeadlessTabGroup>
      <HeadlessTabList>
        <HeadlessTab v-slot="{ selected }" as="template">
          <button rounded-t px-4 py-2 text-xs font-semibold uppercase outline-none :class="[selected ? 'bg-light-gray' : 'bg-dark-gray']">
            onlayn ko'rish
          </button>
        </HeadlessTab>
        <HeadlessTab v-if="item.trailer" v-slot="{ selected }" as="template">
          <button rounded-t px-4 py-2 text-xs font-semibold uppercase outline-none :class="[selected ? 'bg-light-gray' : 'bg-dark-gray']">
            treylerini ko'rish
          </button>
        </HeadlessTab>
      </HeadlessTabList>
      <HeadlessTabPanels>
        <HeadlessTabPanel>
          <iframe width="640" height="360" :src="item.video" frameborder="0" allowfullscreen />
        </HeadlessTabPanel>
        <HeadlessTabPanel v-if="item.trailer">
          <iframe width="640" height="360" :src="item.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
        </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
  </div>
</template>
