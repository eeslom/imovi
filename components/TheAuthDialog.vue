<script setup lang="ts">
const supabase = useSupabaseClient()

const isOpen = ref<boolean>(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

const state = reactive({
  email: '',
  password: '',
  errorMsg: '',
})

const redirectTo = `${useRuntimeConfig().public.baseUrl}/user/confirm`

async function loginWithPassword() {
  const { error } = await supabase.auth.signInWithOtp({
    email: state.email,
  })

  if (error)
    state.errorMsg = error.message
}

async function logInWithOAuth(provider: 'google' | 'facebook') {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  })

  if (error)
    throw error
}
</script>

<template>
  <div inset-0 flex items-center justify-center>
    <button
      type="button"
      inline-flex items-center gap-2 btn
      @click="openModal"
    >
      <div i-carbon-login inline-block text-lg />
      Kirish
    </button>
  </div>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" relative z-10 @close="closeModal">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div fixed inset-0 bg-black bg-opacity-25 />
      </HeadlessTransitionChild>

      <div fixed inset-0 overflow-y-auto>
        <div
          min-h-full flex items-center justify-center p-4 text-center
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
              max-w-md w-full transform overflow-hidden rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all
            >
              <div w-full flex items-center justify-between>
                <HeadlessDialogTitle
                  as="h3"
                  text-lg font-medium leading-6
                >
                  Kirish
                </HeadlessDialogTitle>
                <div>
                  <button @click="closeModal">
                    <div i-carbon-close inline-block text-lg />
                  </button>
                </div>
              </div>

              <div mt-4>
                <form class="space-y-6" @submit.prevent="loginWithPassword">
                  <div>
                    <div class="mt-1">
                      <input type="email" placeholder="Email pochtangizni kiriting..." block w-full appearance-none border-1 border-gray-300 rounded-md px-3 py-2 text-black shadow-sm focus:border-teal-500 sm:text-sm focus:outline-none focus:ring-teal-500 placeholder-gray-400>
                    </div>
                  </div>

                  <div>
                    <div class="mt-1">
                      <input type="password" placeholder="Parolingizni kiriting..." block w-full appearance-none border-1 border-gray-300 rounded-md px-3 py-2 text-black shadow-sm focus:border-teal-500 sm:text-sm focus:outline-none focus:ring-teal-500 placeholder-gray-400>
                    </div>
                  </div>

                  <div v-if="state.errorMsg">
                    <div mt-1>
                      <span text-red>{{ state.errorMsg }}</span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" h-4 w-4 border-gray-300 rounded text-teal-600 focus:ring-teal-500>
                      <label for="remember-me" class="ml-2 block text-sm text-gray-200"> Meni eslab qolish </label>
                    </div>

                    <div class="text-sm">
                      <NuxtLink to="/" class="text-teal-500 font-medium hover:text-teal-600">
                        Parolni unutdingizmi?
                      </NuxtLink>
                    </div>
                  </div>

                  <div>
                    <button type="submit" w-full flex justify-center btn>
                      Kirish
                    </button>
                  </div>
                </form>
              </div>

              <div mt-2>
                <div relative>
                  <div absolute inset-0 flex items-center>
                    <div w-full border-t border-gray-300 />
                  </div>
                  <div relative flex justify-center text-sm>
                    <span bg-gray-600 px-2 text-gray-200> Yoki </span>
                  </div>
                </div>
                <div mt-2 flex items-baseline gap-2>
                  <button w-full flex items-center justify-center rounded-lg bg-gray-100 py-2 hover:bg-gray-200 @click="logInWithOAuth('google')">
                    <div i-logos-google-icon inline-block />
                  </button>
                  <button w-full flex items-center justify-center rounded-lg bg-gray-100 py-2 hover:bg-gray-200 @click="logInWithOAuth('facebook')">
                    <div i-logos-facebook inline-block />
                  </button>
                </div>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
