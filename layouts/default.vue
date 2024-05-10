<template>
  <main>
    <AppNavbar />
    <div mx-auto max-w-7xl gap-5 lg:grid lg:grid-cols-5>
      <div lg:col-span-4>
        <slot />
      </div>
      <LazyRandomFilms lg:col-span-1 />
    </div>
    <AppFooter />
  </main>
</template>
