<script setup lang="ts">
const searchStore = useSearchStore()

const q = ref<string>('')

const results = ref()

const isLoading = ref<boolean>(false)

async function searchData() {
  try {
    if (q.value) {
      isLoading.value = true
      const data = await $fetch('/api/search', {
        params: {
          q: q.value.trim(),
          limit: 3,
        },
      })

      isLoading.value = false
      results.value = data
    }
    else {
      isLoading.value = false
      results.value = null
    }
  }
  catch (error) {
    console.error(error)
  }
}

watch(() => searchStore.isOpen, (val) => {
  if (val === false) {
    q.value = ''
    results.value = null
  }
})
</script>

<template>
  <div inset-0 flex items-center justify-center>
    <button
      type="button"
      flex items-center justify-center rounded-md px-4 py-2 text-white font-medium focus:outline-none
      @click="searchStore.open"
    >
      <div i-carbon-search text-lg aria-hidden="true" />
    </button>
  </div>
  <HeadlessTransitionRoot appear :show="searchStore.isOpen" as="template">
    <HeadlessDialog as="div" relative z-10 @close="searchStore.close">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div fixed inset-0 bg-black bg-op-75 />
      </HeadlessTransitionChild>

      <div fixed inset-0 overflow-y-auto>
        <div
          flex justify-center p-3 text-center sm:p-4
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              mt-5 max-w-4xl w-full transform overflow-hidden text-left align-middle transition-all
            >
              <div mt-2 w-full>
                <form flex items-center justify-between gap-3 sm:gap-5 @submit.prevent="searchData">
                  <div relative w-full flex>
                    <span field-add-on>
                      <div i-carbon-search />
                    </span>
                    <input v-model="q" rounded-s-none type="text" field placeholder="Qidirish..." @input="searchData">
                    <div v-if="isLoading" absolute right-2 self-center>
                      <div i-svg-spinners-270-ring />
                    </div>
                  </div>
                  <button rounded-e rounded-s-none icon-btn @click="searchStore.close">
                    <span sr-only>Yopish</span>
                    <div i-carbon-close text-xl />
                  </button>
                </form>
                <SearchResults v-if="results && results.length" :results="results" />
                <div v-if="results" w-full border-t border-gray-600 rounded-b bg-slate-gray>
                  <NuxtLink to="/" w-full p-3 sm:p-4>
                    Barcha natijalarni ko'rish...
                  </NuxtLink>
                </div>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
