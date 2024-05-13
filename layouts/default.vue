<template>
  <main>
    <AppNavbar />
    <div mx-auto max-w-7xl gap-5 px-5 py-4 lg:grid lg:grid-cols-5>
      <div lg:col-span-4>
        <TheGenresList />
        <slot />
      </div>
      <LazyRandomFilms lg:col-span-1 />
    </div>
    <AppFooter />
  </main>
</template>
