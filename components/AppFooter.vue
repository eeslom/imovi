<template>
  <div w-full>
    <footer w-full bg-dark-gray p-2 sm:p-4>
      <div mx-auto max-w-7xl w-full flex flex-col items-center justify-between gap-y-8 p-4 sm:flex-row>
        <div text-center text-sm sm:text-left>
          <NuxtLink to="/">
            <NuxtImg format="webp" width="180" src="/logo.png" alt="Imovi" />
          </NuxtLink>
          <div mt-4 text-gray-400>
            © {{ new Date().getFullYear() }} - Imovi.uz
          </div>
          <div mt-2 text-gray-200>
            Yaratuvchi <a href="https://t.me/islom_here" hover:underline>islomurodov</a>
          </div>
        </div>
        <ContentNavigation v-slot="{ navigation }">
          <ul v-for="link in navigation" :key="link._path" flex flex-wrap justify-center gap-5>
            <li v-for="childLink in link.children" :key="childLink._path">
              <NuxtLink :to="childLink._path" border-1 rounded px-4 py-1 text-xs icon-btn hover:border-green sm:text-sm>
                {{ childLink.title }}
              </NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
        <span />
      </div>
    </footer>
    <div mx-auto max-w-7xl w-full p-4 text-center text-balance text-xs text-gray>
      © {{ new Date().getFullYear() }} - Imovi.uz <br>
      Barcha huquqlar himoyalangan. Filmlarga bo'lgan huquq ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot olish uchun mo'ljallangan. Foydalanuvchilar joylashtirgan noqonuniy materiallar uchun ma'muriyat javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi.
    </div>
  </div>
</template>
