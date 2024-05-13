<script setup lang="ts">
const route = useRoute()

const year = route.params.year

const { data: items } = await useFetch(`/api/movies/year/${year}`)
</script>

<template>
  <div>
    <Listing :items="items" />
  </div>
</template>
