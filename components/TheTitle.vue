<script setup lang="ts">
defineProps<{
  color?: string
}>()
</script>

<template>
  <h3 m0 border-s-3 border-green p0 pl-3 font-semibold uppercase>
    <slot />
  </h3>
</template>
