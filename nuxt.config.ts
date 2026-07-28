import process from 'node:process'
import { appDescription } from './constants/index'

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
    '@nuxtjs/sitemap',
    '@nuxt/content',
  ],

  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
  },

  runtimeConfig: {
    supabase: {
      url: import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL,
      key: import.meta.env.SUPABASE_KEY || process.env.SUPABASE_KEY,
    },
    telegramBot: {
      botToken: import.meta.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN,
      chatId: import.meta.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID,
    },
  },

  site: {
    name: 'Imovi uz',
    url: 'https://imovi.uz',
  },

  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/',
      callback: '/user/confirm',
    },
  },

  image: {
    domains: ['www.imovi.uz', 'imovi.uz', 'imovi-uz.vercel.app', 'wsrv.nl', 'image.tmdb.org', 'i.pinimg.com', 'musicart.xboxlive.com', 'avatars.mds.yandex.net', 'cdn.culture.ru', 'gauokzjbwdzovotccymx.supabase.co'],
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  headlessui: {
    prefix: 'Headless',
  },

  nitro: {
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
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    pageTransition: false,
    layoutTransition: false,
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'dns-prefetch', href: 'https://wsrv.nl' },
      ],
      meta: [
        { name: 'yandex-verification', content: 'fb62c84b8401ccc7' },
        { name: 'msvalidate.01', content: 'A6021B3DA0391ADB979BB8108FDD4049' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-YE7Z7J1X62`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YE7Z7J1X62');
          `,
          type: 'text/javascript',
        },
      ],
    },
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
