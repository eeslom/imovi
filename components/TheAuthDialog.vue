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
})

const redirectTo = `${useRuntimeConfig().public.baseUrl}/user/confirm`

async function loginWithPassword() {
  const { error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password,
  })

  if (error)
    throw error
}

async function logInWithOAuth(provider: 'google') {
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
              bg-darkgray max-w-md w-full transform overflow-hidden rounded-lg p-4 text-left align-middle shadow-xl transition-all
            >
              <div w-full flex items-center justify-between>
                <HeadlessDialogTitle
                  as="h3"
                  text-lg text-gray-900 font-medium leading-6
                >
                  Kirish
                </HeadlessDialogTitle>
                <div>
                  <button @click="closeModal">
                    <div i-carbon-close inline-block text-lg text-black />
                  </button>
                </div>
              </div>
              <div mt-2>
                <p text-sm text-gray-500>
                  O'zingizga qulay usulni tanlang:
                </p>
              </div>

              <div mt-4>
                <h4 text-center>
                  Yoki:
                </h4>
                <div>
                  <button @click="logInWithOAuth('google')">
                    <div i-logos-google-icon inline-block />
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
