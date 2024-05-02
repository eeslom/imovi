<script setup lang="ts">
const user = useSupabaseUser()

// const userStore = useUserStore()

const navigation = ref<{ name: string, to: string }[]>([
  {
    name: 'Filmlar',
    to: '/',
  },
  {
    name: 'Multfilmlar',
    to: '/',
  },
])
</script>

<template>
  <HeadlessDisclosure v-slot="{ open }" as="nav" bg-dark-gray shadow>
    <div mx-auto max-w-7xl px-4 lg:px-8 sm:px-6>
      <div h-16 flex justify-between>
        <div flex>
          <div flex flex-shrink-0 items-center>
            <NuxtLink to="/">
              <NuxtImg block h-7 w-auto object-cover sm:h-8 src="/logo.png" alt="Imovi" />
            </NuxtLink>
          </div>
          <div hidden sm:ml-10 md:flex md:space-x-8>
            <NuxtLink v-for="item in navigation" :key="item.name.toLowerCase().split(' ').join('-')" :to="item.to" inline-flex items-center px-1 pt-1 text-sm text-gray-100 font-medium hover:text-green>
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div flex items-center>
          <div hidden md:ml-8 md:flex md:items-center>
            <!-- Profile dropdown -->
            <HeadlessMenu v-if="user" as="div" relative ml-3>
              <div>
                <HeadlessMenuButton flex rounded-full bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green>
                  <span sr-only>Foydalanuvchi menyusini ochish</span>
                  <NuxtImg v-if="user.user_metadata.avatar_url" h-10 w-10 rounded-full :src="user.user_metadata.avatar_url" alt="" />
                  <div v-else rounded-full bg-slate-gray p-2 text-xl>
                    <div i-carbon-user />
                  </div>
                </HeadlessMenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <HeadlessMenuItems absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-600 bg-opacity-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none>
                  <HeadlessMenuItem v-slot="{ active }">
                    <NuxtLink to="/" flex items-center gap-2 px-4 py-2 text-sm text-gray-200 :class="[active ? 'bg-gray-500' : '']">
                      <div i-carbon-user-filled aria-hidden="true" />Akkaunt
                    </NuxtLink>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem v-slot="{ active }">
                    <NuxtLink tp="/" flex items-center gap-2 px-4 py-2 text-sm text-gray-200 :class="[active ? 'bg-gray-500' : '']">
                      <div i-carbon-bookmark-filled aria-hidden="true" />
                      Yoqtirilganlar
                    </NuxtLink>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem v-slot="{ active }">
                    <NuxtLink to="/user/logout" flex items-center gap-2 px-4 py-2 text-sm text-gray-200 :class="[active ? 'bg-gray-500' : '']">
                      <div i-carbon-logout aria-hidden="true" /> Chiqish
                    </NuxtLink>
                  </HeadlessMenuItem>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>
            <TheAuthDialog v-else />
          </div>
        </div>
        <div order--1 mr--2 flex items-center md:hidden>
          <!-- Mobile menu button -->
          <HeadlessDisclosureButton inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green focus:ring-inset>
            <span sr-only>Asosiy menyuni ochish</span>
            <div v-if="!open" i-carbon-menu block h-6 w-6 aria-hidden="true" />
            <div v-else i-carbon-close block h-6 w-6 aria-hidden="true" />
          </HeadlessDisclosureButton>
        </div>
      </div>
    </div>

    <HeadlessDisclosurePanel md:hidden>
      <div pb-3 pt-2 space-y-1>
        <HeadlessDisclosureButton v-for="item in navigation" :key="item.name.toLowerCase().split(' ').join('-')" as="a" :href="item.to" block border-l-4 py-2 pl-3 pr-4 text-base text-gray-200 font-medium hover:border-green hover:bg-slate-gray hover:bg-opacity-25 hover:text-green>
          {{ item.name }}
        </HeadlessDisclosureButton>
      </div>
      <div v-if="user" border-t border-gray-200 pb-3 pt-4>
        <div flex items-center px-4>
          <div flex-shrink-0>
            <NuxtImg v-if="user.user_metadata.avatar_url" h-10 w-10 rounded-full :src="user.user_metadata.avatar_url" alt="" />
            <div v-else rounded-full bg-slate-gray p-2 text-xl>
              <div i-carbon-user />
            </div>
          </div>
          <div ml-3>
            <div text-base text-gray-400 font-medium>
              {{ user.user_metadata.name }}
            </div>
            <div text-sm text-gray-500 font-medium>
              {{ user.user_metadata.email }}
            </div>
          </div>
        </div>
        <div mt-3 space-y-1>
          <HeadlessDisclosureButton as="a" href="/user/profile" block px-4 py-2 text-base text-gray-500 font-medium hover:bg-gray-100 hover:text-gray-800>
            Akkaunt
          </HeadlessDisclosureButton>
          <HeadlessDisclosureButton as="a" href="#" block px-4 py-2 text-base text-gray-500 font-medium hover:bg-gray-100 hover:text-gray-800>
            Settings
          </HeadlessDisclosureButton>
          <HeadlessDisclosureButton as="a" href="/user/logout" block px-4 py-2 text-base text-gray-500 font-medium hover:bg-gray-100 hover:text-gray-800>
            Chiqish
          </HeadlessDisclosureButton>
        </div>
      </div>
      <div v-else border-t border-gray-500 pb-3 pt-4>
        <TheAuthDialog />
      </div>
    </HeadlessDisclosurePanel>
  </HeadlessDisclosure>
</template>
