// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
  },
  privateRuntimeConfig: {
    HELLO: "world in the server not the client",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
