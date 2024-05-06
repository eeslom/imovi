<script setup lang="ts">
const route = useRoute()

const id = route.params.slug.split('-')[0]

const { data } = await useFetch<Movie>(`/api/movies/${id}`)
</script>

<template>
  <div>
    <Head>
      <Meta v-if="data" name="keywords" :content="data.title.split(' ').join(', ')" />
    </Head>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>
