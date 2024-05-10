<script setup lang="ts">
const route = useRoute()

const { id } = route.params as { id: number }

const { data } = useFetch(`/api/movies/${id}`)
</script>

<template>
  <div>
    <Head>
      <Meta v-if="data" name="keywords" :content="`${data.title.split(' ').join(', ')}, kino, serial, uzbek, o'zbek, tilida`" />
    </Head>
    {{ data?.title }}
  </div>
</template>
