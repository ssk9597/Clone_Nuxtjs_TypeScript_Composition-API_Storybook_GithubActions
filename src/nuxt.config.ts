import { NuxtConfig } from '@nuxt/types';

// Font Awesome
import * as FontAwesome from './libs/fontawesome';

const config: NuxtConfig = {
  // env
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'src',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  styleResources: {
    scss: ['~/assets/scss/style.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  storybook: {
    port: 6006,

    parameters: {
      controls: {
        expanded: true,
      },
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
  ],

  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

export default config;
