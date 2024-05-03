<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
</script>

<template>
  <div>Hello {{ user?.user_metadata.name }}</div>
</template>
