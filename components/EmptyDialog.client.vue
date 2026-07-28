<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  description: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

function closeModal() {
  emit('closeModal')
}
</script>

<template>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" relative z-10 @click="closeModal">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div fixed inset-0 class="bg-black/25" />
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
              max-w-md w-full transform overflow-hidden rounded-lg bg-dark-gray p-6 text-left align-middle shadow-xl transition-all
            >
              <div w-full flex items-center justify-between>
                <HeadlessDialogTitle
                  as="h3"
                  text-lg text-gray-200 font-medium leading-6
                >
                  {{ !$slots.title ? title : null }} <slot name="title" />
                </HeadlessDialogTitle>
                <button text-gray-200 @click="closeModal">
                  <div i-carbon-close />
                </button>
              </div>
              <div mt-2>
                <p text-sm text-gray-400>
                  {{ !$slots.description ? description : null }} <slot name="description" />
                </p>
              </div>

              <div mt-4>
                <button
                  type="button"
                  btn
                  @click="closeModal"
                >
                  Yopish
                </button>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
