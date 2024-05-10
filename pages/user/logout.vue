<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  middleware: 'auth',
})

const supabase = useSupabaseClient()

async function logout() {
  await supabase.auth.signOut()
  navigateTo('/')
}

onMounted(logout)
</script>

<template>
  <div h-screen w-full flex items-center justify-center>
    <span text-xl font-semibold>
      Chiqilmoqda...
    </span>
  </div>
</template>
