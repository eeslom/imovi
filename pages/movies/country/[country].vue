<script setup lang="ts">
const route = useRoute()

const country = computed(() => route.params.country)
const page = computed(() => route.query.page)

const { data } = await useFetch(() => `/api/movies/country/${country.value}`, {
  query: { page },
  watch: [page],
})

const items = computed(() => data.value?.data ?? [])
const total = computed(() => data.value?.total ?? 0)
const currentPage = computed(() => Number(data.value?.page) || 1)
const pageSize = computed(() => data.value?.pageSize ?? 16)
</script>

<template>
  <div>
    <Listing :items="items" />
    <ThePagination :total="total" :page="currentPage" :page-size="pageSize" :base-url="`/movies/country/${route.params.country}`" />
  </div>
</template>
