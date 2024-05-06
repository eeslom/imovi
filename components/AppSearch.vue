<script setup lang="ts">
const searchStore = useSearchStore()
</script>

<template>
  <div z-1000 flex items-center>
    <button flex items-center justify-center text-lg icon-btn @click="searchStore.toggleSearch">
      <div v-if="!searchStore.searchOpen" i-carbon-search />
      <div v-else i-carbon-close />
    </button>
  </div>
  <div v-if="searchStore.searchOpen" absolute left-0 top-0 z-100 h-full w-full bg-black bg-op-75 duration-300>
    <div absolute left-0 top-0 z--1 h-full w-full @click="searchStore.closeSearch" />
    <div justify-centerfy z-10 mx-auto h-full max-w-4xl w-full flex items-center>
      <form w-full @submit.prevent>
        <input type="search" placeholder="Qidirish..." field w-full>
      </form>
    </div>
  </div>
</template>
