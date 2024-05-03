<script setup lang="ts">
interface State {
  name: string
  reachUrl: string
  sect: 'technical' | 'films'
  title: string
  message: string
}

const state = reactive<State>({
  name: '',
  reachUrl: '',
  sect: 'technical',
  title: '',
  message: '',
})

const isOpen = ref<boolean>(false)

function closeModal() {
  isOpen.value = false
}

async function sendData() {
  const dataRaw = ref<string>(`*Ismi:* ${state.name}\n*Bog'lanish manzili:* ${state.reachUrl}\n*Bo'lim:* ${state.sect}\n*Mavzusi:* ${state.title}\n*Xabari:* ${state.message}`)

  const { status } = await useFetch(`/api/send/telegram-bot`, {
    params: {
      text: dataRaw.value,
    },
  })

  if (status.value === 'success') {
    state.name = ''
    state.reachUrl = ''
    state.title = ''
    state.sect = 'technical'
    state.message = ''
    isOpen.value = true
  }
}
</script>

<template>
  <div>
    <form flex flex-col gap-3 @submit.prevent="sendData">
      <div mt-1 flex rounded-md shadow-sm>
        <span field-add-on>
          <div i-carbon-user-filled />
        </span>
        <input v-model="state.name" required field rounded-s-none type="text" placeholder="Ismingiz">
      </div>
      <div mt-1 flex rounded-md shadow-sm>
        <span field-add-on>
          <div i-carbon-at />
        </span>
        <input v-model="state.reachUrl" required field rounded-s-none type="text" placeholder="Elektron pochta, telefon raqam yoki telegram havola">
      </div>
      <div mt-1 flex rounded-md shadow-sm>
        <span field-add-on>
          <div i-carbon-email />
        </span>
        <select v-model="state.sect" field appearance-auto rounded-s-none>
          <option selected value="technical">
            Texnik bo'lim
          </option>
          <option value="films">
            Filmlar bo'limi
          </option>
        </select>
      </div>
      <div mt-1 flex rounded-md shadow-sm>
        <span field-add-on>
          <div i-carbon-document />
        </span>
        <input v-model="state.title" required field rounded-s-none type="text" placeholder="Xabar mavzusi">
      </div>
      <div mt-1 flex rounded-md>
        <span field-add-on>
          <div i-carbon-chat />
        </span>
        <textarea v-model="state.message" required field resize-y rounded-s-none placeholder="Xabar..." />
      </div>
      <button w-full uppercase btn type="submit">
        Yuborish
      </button>
    </form>
    <EmptyDialog :is-open="isOpen" @close-modal="closeModal">
      <template #title>
        Xabar muvaffaqiyatli yuborildi
      </template>
      <template #description>
        Xabaringiz muvaffaqiyatli yuborildi, tez orada xabaringizni ko'rib chiqamiz va siz bilan bog'lanamiz
      </template>
    </EmptyDialog>
  </div>
</template>
