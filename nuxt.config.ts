// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // SPAで出力したいからSSRせずにnuxt generateを実行する
  ssr: false,
})
