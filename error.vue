<script setup lang="ts">
const error = useError()

const router = useRouter()

useHead({
  title: 'Xatolik yuz berdi',
})
</script>

<template>
  <div grid min-h-screen place-items-center px-4 py-16 lg:px-8 sm:px-6 sm:py-24>
    <div mx-auto max-w-max>
      <main sm:flex>
        <p text-4xl text-green font-extrabold sm:text-5xl>
          {{ error?.statusCode }}
        </p>
        <div sm:ml-6>
          <div sm:border-l sm:border-gray-200 sm:pl-6>
            <h1 text-balance text-4xl text-gray-200 font-bold tracking-tight sm:text-5xl>
              {{ error?.statusMessage }}
            </h1>
            <div mt-2 flex flex-col gap-2>
              <p text-balance text-base text-gray-400>
                Xatolik haqida xabar berish
              </p>
              <div>
                <a href="https://t.me/islom_here" target="_blank" inline-flex items-center gap-2 border-1 border-gray-500 rounded-lg px-2 py-1 icon-btn hover:border-dark-green>Imovi support <div i-carbon-chat inline-block /></a>
              </div>
            </div>
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
