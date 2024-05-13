<template>
  <main>
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
