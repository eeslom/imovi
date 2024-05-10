<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  middleware: 'auth',
})

const user = useSupabaseUser()

watch(user, () => {
  if (user.value)
    return navigateTo('/')
}, { immediate: true })
</script>

<template>
  <div h-screen w-full flex items-center justify-center>
    <span text-xl font-semibold>
      Kirish kutilmoqda...
    </span>
  </div>
</template>
