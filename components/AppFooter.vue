<template>
  <div w-full>
    <footer w-full bg-dark-gray p-4>
      <div mx-auto max-w-7xl w-full flex flex-col items-center justify-between gap-y-10 p-4 sm:flex-row>
        <div text-sm>
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
          <ul v-for="link in navigation" :key="link._path" flex flex-wrap items-center justify-center gap-5>
            <li v-for="childLink in link.children" :key="childLink._path">
              <NuxtLink :to="childLink._path" border-1 rounded px-4 py-1 text-sm icon-btn hover:border-green>
                {{ childLink.title }}
              </NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
        <div text-sm>
          <a href="http://www.uz/uz/res/visitor/index?id=47578" target="top"><img
            height="31"
            src="https://cnt0.www.uz/counter/collect?id=47578&pg=http%3A//uzinfocom.uz&&col=F7AE00&amp;t=ffffff&amp;p=0E418F"
            width="88"
            border="0"
            alt="Топ рейтинг www.uz"
          ></a>
        </div>
      </div>
    </footer>
    <div mx-auto max-w-7xl w-full p-4 text-center text-balance text-xs>
      © {{ new Date().getFullYear() }} - Imovi.uz <br>
      Barcha huquqlar himoyalangan. Filmlarga bo'lgan huquq ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot olish uchun mo'ljallangan. Foydalanuvchilar joylashtirgan noqonuniy materiallar uchun ma'muriyat javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi.
    </div>
  </div>
</template>
