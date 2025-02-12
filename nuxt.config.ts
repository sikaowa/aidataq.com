const url = import.meta.env.SITE_URL;
const name = "数话科技";
const description =
  "新一代对话式AI数据分析平台";
const locale = "en";

export default defineNuxtConfig({
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@samk-dev/nuxt-vcalendar",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "@nuxt/image",
    "@aksharahegde/nuxt-glow",
    "v-wave/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@vite-pwa/nuxt",
    "@nuxthq/studio",
      // '@nuxtjs/axios'
  ],
  // axios: {
  // },
  // axios: {
    // proxy: true
  // },
  tailwindcss: { exposeConfig: true },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
    // hid: 'nuxt-color-mode-script',
    // globalName: '__NUXT_COLOR_MODE__',
    // componentName: 'ColorScheme',
    // classPrefix: '',
    // classSuffix: '-mode',
    // storageKey: 'nuxt-color-mode'
  },
  eslint: { config: { stylistic: false } },

  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  pwa: {
    includeAssets: ["favicon.ico", "robots.txt"],
    // manifest: {
    //   name,
    //   short_name: name,
    //   description,
    //   theme_color: "#000",
    //   lang: locale,
    //   icons: [
    //     {
    //       src: "/icons/pwa-192x192.png",
    //       sizes: "192x192",
    //       type: "image/png",
    //       purpose: "any",
    //     },
    //     {
    //       src: "/icons/pwa-512x512.png",
    //       sizes: "512x512",
    //       type: "image/png",
    //       purpose: "any",
    //     },
    //     {
    //       src: "/icons/pwa-maskable-192x192.png",
    //       sizes: "192x192",
    //       type: "image/png",
    //       purpose: "maskable",
    //     },
    //     {
    //       src: "/icons/pwa-maskable-512x512.png",
    //       sizes: "512x512",
    //       type: "image/png",
    //       purpose: "maskable",
    //     },
    //   ],
    // },
  },

  app: {
    head: {
      titleTemplate: `%s - ${name}`,
      // script: [
      //   {
      //     src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js",
      //     defer: true,
      //   },
      //   {
      //     src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.min.js",
      //     defer: true,
      //   },
      // ],
    },
  },

  build: { transpile: ["vue-sonner", "shiki"] },

  content: {
    documentDriven: true,
    markdown: { toc: { depth: 3 } },
    navigation: { fields: ["icon"] },
    highlight: {
      langs: ["dockerfile", "js", "ts", "css", "html", "vue", "bash", "md", "mdc", "yaml"],
      theme: {
        default: "min-light",
        dark: "night-owl",
      },
    },
  },

  site: {
    url,
    name,
    description,
    defaultLocale: locale, // not needed if you have @nuxtjs/i18n installed
  },

  // schemaOrg: {
  //   identity: {
  //     name,
  //     url,
  //     description,
  //     type: "Organization",
  //     logo: `${url}/icon.png`,
  //   },
  // },
  //
  sitemap: {
    autoLastmod: true,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },


  compatibilityDate: "2024-07-09",
});