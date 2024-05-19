<script setup lang="ts">
const route = useRoute()

const { country } = route.params as { country: string }

const { data: items } = await useFetch(`/api/movies/country/${country}`)
</script>

<template>
  <div>
    <Listing :items="items" />
  </div>
</template>
