<script setup lang="ts">
const route = useRoute()
const { id } = route.params as { id: number }

const { data } = await useFetch(`/api/genres/${id}`)
</script>

<template>
  <div>
    janr: {{ data?.name }}
  </div>
</template>
