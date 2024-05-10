import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const isOpen = ref<boolean>(false)

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function open(): void {
    isOpen.value = true
  }

  function close(): void {
    isOpen.value = false
  }

  return {
    isOpen,
    toggle,
    open,
    close,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
