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
  const { error, data } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password,
  })

  if (error) {
    state.errorMsg = error.message
    setTimeout(() => state.errorMsg = '', 3000)
  }

  console.log(data)
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
              max-w-md w-full transform overflow-hidden rounded-lg bg-dark-gray p-4 text-left align-middle transition-all
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
                <form space-y-4 @submit.prevent="loginWithPassword">
                  <div>
                    <div mt-1>
                      <input v-model="state.email" type="email" autocomplete="email" placeholder="Email pochtangizni kiriting..." field>
                    </div>
                  </div>

                  <div>
                    <div mt-1>
                      <input v-model="state.password" type="password" placeholder="Parolingizni kiriting..." field>
                    </div>
                  </div>

                  <div v-if="state.errorMsg" text-sm text-red>
                    {{ state.errorMsg }}
                  </div>

                  <div flex items-center justify-between>
                    <span />

                    <div text-sm>
                      <NuxtLink to="/" text-green font-medium hover:text-dark-green>
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

              <div relative mt-2>
                <div absolute inset-0 flex items-center>
                  <div w-full border-t border-gray-400 />
                </div>
                <div relative flex justify-center text-sm>
                  <span bg-dark-gray px-2 text-gray-300> Yoki </span>
                </div>
              </div>

              <div mt-2>
                <div mt-2 flex flex-col items-baseline gap-2 sm:flex-row>
                  <button iconic-btn title="Google orqali kirish" @click="logInWithOAuth('google')">
                    <span sr-only>Google orqali kirish</span>
                    <div i-logos-google-icon inline-block />
                  </button>
                  <button iconic-btn disabled title="Xozircha ushbu yo'l bilan kira olmaysiz" @click="logInWithOAuth('facebook')">
                    <span sr-only>Facebook orqali kirish</span>
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
