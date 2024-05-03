<script setup lang="ts">
const sessions = useSupabaseSession().value?.user
</script>

<template>
  <div>
    {{ sessions }}
  </div>
</template>
