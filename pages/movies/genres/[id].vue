<script setup lang="ts">
const route = useRoute()

const id = route.params.id
const page = route.query.page

const { data: items } = await useFetch(`/api/movies/genres/${id}`, {
  query: {
    page,
  },
})
</script>

<template>
  <div>
    <Listing :items="items" />
    <ThePagination />
  </div>
</template>
