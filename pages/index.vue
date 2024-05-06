<script setup lang="ts">
const { data: movies } = await useFetch('/api/movies')
const { data: genres } = await useFetch('/api/genres')
</script>

<template>
  <div p-4>
    <ul mb-4 box-content flex gap-3 overflow-hidden>
      <li v-for="genre in genres" :key="genre.id" inline-block rounded bg-light-gray px-4 py-2>
        {{ genre.name }}
      </li>
    </ul>
    <Listing :items="movies" />
  </div>
</template>
