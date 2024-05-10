<script setup lang="ts">
defineProps<{
  content: string
  color: string
}>()
</script>

<template>
  <h3>{{ content }}</h3>
</template>
