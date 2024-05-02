import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['iconic-btn', 'w-full flex items-center justify-center rounded bg-gray-100 py-2 hover:bg-gray-200 disabled:opacity-50 disabled:bg-gray-300'],
  ],
  theme: {
    colors: {
      green: 'rgb(13 148 136)',
      darkGreen: 'rgb(15 118 110)',
      black: '#000000',
      darkGray: '#25272A',
      lightGray: '#3A3C40',
      slateGray: '#2f3640',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        serif: 'DM Serif Display',
        mono: 'Fira Code',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
