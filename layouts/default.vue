<template>
  <main>
    <div mx-auto max-w-6xl px-2 py-1>
      <marquee>
        Sayt vaqtinchalik test rejimida ishlayabdi! Сайт работает во временном тестовом режиме!
      </marquee>
    </div>
    <AppNavbar />
    <div mx-auto max-w-7xl gap-5 px-3 py-4 xl:grid xl:grid-cols-5>
      <div xl:col-span-4>
        <TheGenresList />
        <slot />
      </div>
      <LazyRandomFilms xl:col-span-1 />
    </div>
    <AppFooter />
  </main>
</template>
