import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/supabase',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-headlessui',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nuxt-gtag'
  ],

  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60 } },
  },

  runtimeConfig: {
    supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
    },
    telegramBot: {
      botToken: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
    },
    public: {
      baseUrl: 'https://www.imovi.uz'
    }
  },

  site: {
    name: 'Imovi uz',
    url: 'https://www.imovi.uz',
  },

  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/',
      callback: '/user/confirm',
    },
  },

  image: {
    domains: ['www.imovi.uz', 'imovi.uz', 'imovi-9qp.pages.dev', 'wsrv.nl', 'image.tmdb.org', 'i.pinimg.com', 'musicart.xboxlive.com', 'avatars.mds.yandex.net', 'cdn.culture.ru', 'gauokzjbwdzovotccymx.supabase.co'],
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  headlessui: {
    prefix: 'Headless',
  },

  nitro: {
    preset: 'cloudflare_pages',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    routeRules: {
      '/**': { isr: false },
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      langs: ['js', 'ts', 'vue', 'css', 'scss', 'sass', 'html', 'bash', 'md', 'mdc', 'json'],
    },
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    typedPages: true,
    viewTransition: false
  },  
 
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'yandex-verification', content: 'fb62c84b8401ccc7' },
        { name: 'msvalidate.01', content: 'A6021B3DA0391ADB979BB8108FDD4049' },
        
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  gtag: {
    id: 'G-YE7Z7J1X62'
  },

  devtools: {
    enabled: isDev,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-11-05',
})
