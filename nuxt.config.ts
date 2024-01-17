// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },

  image: {
    domains: ['rickandmortyapi.com/']
  }
})
