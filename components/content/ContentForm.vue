<script setup lang="ts">
interface State {
  name: string
  reachUrl: string
  sect: 'technical' | 'films'
  title: string
  message: string
  dialog: { title: string, description: string }
}

const state = reactive<State>({
  name: '',
  reachUrl: '',
  sect: 'technical',
  title: '',
  message: '',
  dialog: {
    title: '',
    description: '',
  },
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
    state.dialog.title = 'Xabaringiz muvaffaqiyatli yuborildi'
    state.dialog.description = 'Tashakkur. Xabaringiz muvaffaqiyatli yuborildi, xabaringizni ko\'rib chiqib sizga tez orada aloqaga chiqamiz.'
    isOpen.value = true
  }
  else if (status.value === 'error') {
    state.name = ''
    state.reachUrl = ''
    state.title = ''
    state.sect = 'technical'
    state.message = ''
    state.dialog.title = 'Xabaringiz yuborilmadi'
    state.dialog.description = 'Afsuski xabar yuborishda xatolik yuz berdi iltimos keyinroq urinib ko\'ring.'
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
    <EmptyDialog :title="state.dialog.title" :description="state.dialog.description" :is-open="isOpen" @close-modal="closeModal" />
  </div>
</template>
