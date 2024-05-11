<script setup lang="ts">
import type { Database } from '~/types/database.types'

defineProps<{
  title: string
  items: Database['public']['Tables']['movies']['Row'][]
}>()
</script>

<template>
  <div>
    <div mb-3>
      <H3 text-2xl>
        {{ title }}
      </H3>
    </div>
    <ul v-if="items && items.length" grid grid-cols-2 w-full gap-4 md:grid-cols-4 sm:grid-cols-3>
      <Card v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
