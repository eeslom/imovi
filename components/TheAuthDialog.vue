<script setup lang="ts">
const supabase = useSupabaseClient()

const isOpen = ref<boolean>(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

const loginState = reactive<{ email: string, password: string, errorMsg: string }>({
  email: '',
  password: '',
  errorMsg: '',
})

const registerState = reactive<{ name: string, email: string, gender: 'male' | 'female', password: { password: string, confirm: string }, errorMsg: string }>({
  name: '',
  email: '',
  gender: 'male',
  password: {
    password: '',
    confirm: '',
  },
  errorMsg: '',
})

const redirectTo = `${useRuntimeConfig().public.baseUrl}/user/confirm`

async function logIn() {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginState.email,
      password: loginState.password,
    })

    if (error) {
      loginState.errorMsg = error.message
      setTimeout(() => loginState.errorMsg = '', 3000)
    }
  }
  catch (error: any) {
    throw createError({ message: error.message })
  }
}

async function signUp() {
  try {
    if (registerState.password.password === registerState.password.confirm) {
      const { error } = await supabase.auth.signUp({
        email: registerState.email,
        password: registerState.password.password,
        options: {
          data: {
            avatar_url: '',
            name: registerState.name,
            favorites: [],
            gender: registerState.gender,
          },
        },
      })

      if (error) {
        registerState.errorMsg = error.message
        setTimeout(() => registerState.errorMsg = '', 3000)
      }

      navigateTo('/user/confirm')
    }
    else {
      registerState.errorMsg = 'Parollar bir-biriga to\'g\'ri kelmadi'
    }
  }
  catch (error: any) {
    throw createError({ message: error.message })
  }
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
    <button type="button" inline-flex items-center gap-2 btn @click="openModal">
      <div i-carbon-login inline-block text-lg aria-hidden="true" />
      Kirish
    </button>
  </div>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" relative z-10 @close="closeModal">
      <HeadlessTransitionChild
        as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0"
      >
        <div fixed inset-0 bg-black bg-opacity-25 />
      </HeadlessTransitionChild>

      <div fixed inset-0 overflow-y-auto>
        <div min-h-full flex items-center justify-center p-4 text-center>
          <HeadlessTransitionChild
            as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              max-w-md w-full transform overflow-hidden rounded-lg bg-dark-gray p-4 text-left
              align-middle transition-all
            >
              <HeadlessTabGroup>
                <HeadlessTabList mx-auto flex items-center justify-center gap-2 text-center>
                  <HeadlessTab v-slot="{ selected }" as="template">
                    <button text-lg font-semibold icon-btn :class="{ 'text-green': selected }">
                      Kirish
                    </button>
                  </HeadlessTab>
                  <span text-lg font-semibold>|</span>
                  <HeadlessTab v-slot="{ selected }" as="template">
                    <button text-lg font-semibold icon-btn :class="{ 'text-green': selected }">
                      Ro'yhatdan o'tish
                    </button>
                  </HeadlessTab>
                </HeadlessTabList>
                <HeadlessTabPanels>
                  <HeadlessTabPanel>
                    <div mt-5>
                      <form space-y-4 @submit.prevent="logIn">
                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-email />
                            </span>
                            <input
                              v-model="loginState.email" type="email" autocomplete="email"
                              placeholder="Email pochtangizni kiriting" required rounded-s-none field
                            >
                          </div>
                        </div>

                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-password />
                            </span>
                            <input
                              v-model="loginState.password" type="password" placeholder="Parolingizni kiriting..."
                              required rounded-s-none field
                            >
                          </div>
                        </div>

                        <div v-if="loginState.errorMsg" text-sm text-red>
                          {{ loginState.errorMsg }}
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
                  </HeadlessTabPanel>
                  <HeadlessTabPanel>
                    <div mt-5>
                      <form space-y-4 @submit.prevent="signUp">
                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-email />
                            </span>
                            <input
                              v-model="registerState.name" type="text" autocomplete="name"
                              placeholder="To'liq ismingizni kiriting" required rounded-s-none field
                            >
                          </div>
                        </div>

                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-email />
                            </span>
                            <input
                              v-model="registerState.email" type="email" autocomplete="email"
                              placeholder="Email pochtangizni kiriting" required rounded-s-none field
                            >
                          </div>
                        </div>

                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-gender-male />
                            </span>
                            <HeadlessRadioGroup v-model="registerState.gender" w-full>
                              <HeadlessRadioGroupOption v-slot="{ checked }" value="male" cursor-pointer>
                                <div :class="{ 'border-green': checked }" flex items-center justify-between rounded-s-none field>
                                  Erkak <div v-if="checked" rounded-full bg-green p-0.4>
                                    <div i-carbon-checkmark text-xs />
                                  </div>
                                </div>
                              </HeadlessRadioGroupOption>
                              <HeadlessRadioGroupOption v-slot="{ checked }" value="female" cursor-pointer>
                                <div :class="{ 'border-green': checked }" flex items-center justify-between rounded-s-none field>
                                  Ayol <div v-if="checked" rounded-full bg-green p-0.4>
                                    <div i-carbon-checkmark text-xs />
                                  </div>
                                </div>
                              </HeadlessRadioGroupOption>
                            </HeadlessRadioGroup>
                          </div>
                        </div>

                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-password />
                            </span>
                            <input
                              v-model="registerState.password.password" type="password"
                              placeholder="Parolni kiriting" required rounded-s-none field
                            >
                          </div>
                        </div>

                        <div>
                          <div mt-1 flex>
                            <span field-add-on>
                              <div i-carbon-password />
                            </span>
                            <input
                              v-model="registerState.password.confirm" type="password"
                              placeholder="Parolni qayta kiriting" required rounded-s-none field
                            >
                          </div>
                        </div>

                        <div v-if="registerState.errorMsg" text-sm text-red>
                          {{ registerState.errorMsg }}
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
                            Ro'yhatdan o'tish
                          </button>
                        </div>
                      </form>
                    </div>
                  </HeadlessTabPanel>
                </HeadlessTabPanels>
              </HeadlessTabGroup>

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
                  <button
                    disabled iconic-btn title="Xozircha ushbu yo'l bilan kira olmaysiz"
                    @click="logInWithOAuth('facebook')"
                  >
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
