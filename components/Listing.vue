<script setup lang="ts">
defineProps<{
  items: any
}>()
</script>

<template>
  <ul grid grid-cols-2 gap-2 md:grid-cols-4 sm:grid-cols-3>
    <Card v-for="item in items" :key="item.id" :item="item" />
    <Card v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>
