<script setup lang="ts">

</script>

<template>
  <nav relative z-0 mt-4 w-full inline-flex justify-between rounded shadow-sm space-x-px aria-label="Pagination">
    <NuxtLink
      to="/"
      relative inline-flex items-center rounded bg-light-gray px-2 py-2 text-sm text-gray-200 font-medium
    >
      <span sr-only>Oldingisi</span>
      <div i-carbon-arrow-left h-5 w-5 aria-hidden="true" />
    </NuxtLink>
    <div flex gap-2>
      <NuxtLink
        to="/" aria-current="page"
        relative z-10 inline-flex items-center rounded bg-light-gray px-4 py-2 text-sm
      >
        1
      </NuxtLink>
      <div relative z-10 inline-flex items-center rounded bg-dark-gray px-4 py-2 text-sm>
        ...
      </div>
      <NuxtLink
        to="/"
        relative z-10 inline-flex items-center rounded bg-light-gray px-4 py-2 text-sm
      >
        2
      </NuxtLink>
    </div>
    <NuxtLink
      to="/"
      relative inline-flex items-center rounded bg-light-gray px-2 py-2 text-sm text-gray-200 font-medium
    >
      <span sr-only>Keyingisi</span>
      <div i-carbon-arrow-right h-5 w-5 aria-hidden="true" />
    </NuxtLink>
  </nav>
</template>
