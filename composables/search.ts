import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const searchOpen = ref<boolean>(false)

  function toggleSearch() {
    searchOpen.value = !searchOpen.value
  }

  function openSearch(): void {
    searchOpen.value = true
  }

  function closeSearch(): void {
    searchOpen.value = false
  }

  return {
    searchOpen,
    toggleSearch,
    openSearch,
    closeSearch,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
