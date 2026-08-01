<script setup lang="ts">
const props = defineProps<{
  total: number
  page: number | string
  pageSize: number
  baseUrl: string
}>()

const currentPage = computed(() => Number(props.page) || 1)
const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)))

const pages = computed(() => {
  const current = currentPage.value
  const delta = 2
  const range: number[] = []
  const left = Math.max(2, current - delta)
  const right = Math.min(totalPages.value - 1, current + delta)

  range.push(1)
  if (left > 2)
    range.push(-1)
  for (let i = left; i <= right; i++)
    range.push(i)
  if (right < totalPages.value - 1)
    range.push(-1)
  if (totalPages.value > 1)
    range.push(totalPages.value)

  return range
})

function getPageUrl(page: number): string {
  if (page <= 1)
    return props.baseUrl
  return `${props.baseUrl}?page=${page}`
}
</script>

<template>
  <nav v-if="totalPages > 1" relative z-0 mt-4 w-full inline-flex justify-between rounded shadow-sm space-x-px aria-label="Pagination">
    <NuxtLink
      :to="getPageUrl(currentPage - 1)"
      :rel="currentPage > 1 ? 'prev' : undefined"
      :class="currentPage <= 1 ? 'pointer-events-none opacity-50' : ''"
      relative inline-flex items-center rounded bg-light-gray px-2 py-2 text-sm text-gray-200 font-medium
    >
      <span sr-only>Oldingisi</span>
      <div i-carbon-arrow-left h-5 w-5 aria-hidden="true" />
    </NuxtLink>

    <div flex gap-2>
      <template v-for="p in pages" :key="p">
        <span v-if="p === -1" relative z-10 inline-flex items-center rounded bg-dark-gray px-4 py-2 text-sm>
          ...
        </span>
        <NuxtLink
          v-else
          :to="getPageUrl(p)"
          :rel="p === currentPage + 1 ? 'next' : undefined"
          :aria-current="p === currentPage ? 'page' : undefined"
          :class="p === currentPage ? 'bg-green text-white' : 'bg-light-gray'"
          relative z-10 inline-flex items-center rounded px-4 py-2 text-sm
        >
          {{ p }}
        </NuxtLink>
      </template>
    </div>

    <NuxtLink
      :to="getPageUrl(currentPage + 1)"
      :rel="currentPage < totalPages ? 'next' : undefined"
      :class="currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''"
      relative inline-flex items-center rounded bg-light-gray px-2 py-2 text-sm text-gray-200 font-medium
    >
      <span sr-only>Keyingisi</span>
      <div i-carbon-arrow-right h-5 w-5 aria-hidden="true" />
    </NuxtLink>
  </nav>
</template>
