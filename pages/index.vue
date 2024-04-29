<script setup lang="ts">
// const supabase = useSupabaseClient()

// const { data: items } = await useAsyncData('movies', () => $fetch('/api/movies'))

async function getMe() {
  const data = await $fetch('/api/me')

  console.log(data)
}

onMounted(getMe)
</script>

<template>
  <div px-4 py-2>
    <!-- <ul place-items-baseline grid grid-cols-2 mx-auto w-full place-content-center gap-5 overflow-hidden rounded-md lg:grid-cols-4 sm:grid-cols-3>
      <MovieCard v-for="movie in items" :key="movie.id" :movie="movie" />
    </ul> -->
  </div>
</template>
