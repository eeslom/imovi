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
      <TheTitle text-xl sm:text-2xl>
        {{ title }}
      </TheTitle>
    </div>
    <ul v-if="items && items.length" grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3>
      <Card v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
