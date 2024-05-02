<script setup lang="ts">
const router = useRouter()

useHead({
  title: 'Sahifa topilmadi',
})
</script>

<template>
  <div grid min-h-xl place-items-center px-4 py-16 lg:px-8 sm:px-6 sm:py-24>
    <div mx-auto max-w-max>
      <main sm:flex>
        <p text-4xl text-green font-extrabold sm:text-5xl>
          404
        </p>
        <div sm:ml-6>
          <div sm:border-l sm:border-gray-200 sm:pl-6>
            <h1 text-balance text-4xl text-gray-200 font-bold tracking-tight sm:text-5xl>
              Sahifa topilmadi
            </h1>
          </div>
          <div mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6>
            <button inline-flex items-center gap-2 btn @click="router.back()">
              <div i-carbon-arrow-left inline-block /> Ortga qaytish
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
