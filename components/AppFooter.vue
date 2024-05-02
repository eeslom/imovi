<script setup lang="ts">
</script>

<template>
  <div w-full>
    <footer w-full bg-dark-gray p-4>
      <div mx-auto max-w-7xl w-full flex flex-col items-center justify-between gap-y-10 p-4 sm:flex-row>
        <NuxtLink to="/">
          <NuxtImg format="webp" width="200" src="/logo.png" />
        </NuxtLink>
        <ContentNavigation />
        <div />
      </div>
    </footer>
    <div mx-auto max-w-7xl w-full p-4 text-center text-balance text-sm>
      © IMOVI.uz - {{ new Date().getFullYear() }} <br>
      Barcha huquqlar himoyalangan. Filmlarga bo'lgan huquq ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot olish uchun mo'ljallangan. Foydalanuvchilar joylashtirgan noqonuniy materiallar uchun ma'muriyat javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi.
    </div>
  </div>
</template>
