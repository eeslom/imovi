<script setup lang="ts">
const route = useRoute()

const id = route.params.id

const { data: items } = await useFetch(`/api/movies/genres/${id}`)
</script>

<template>
  <div>
    <Listing :items="items" />
  </div>
</template>
