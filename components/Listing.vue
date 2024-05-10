<script setup lang="ts">
defineProps<{
  title: string
  items: any
}>()
</script>

<template>
  <div>
    <div mb-3>
      <h3 border-s-3 border-green pl-3 text-2xl font-semibold uppercase>
        {{ title }}
      </h3>
    </div>
    <ul grid grid-cols-2 w-full gap-3 md:grid-cols-4 sm:grid-cols-3>
      <ListingItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
