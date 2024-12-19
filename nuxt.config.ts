// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   modules: [
     "@nuxtjs/tailwindcss",
     "@nuxtjs/google-fonts",
     "nuxt-lucide-icons"
   ],
   googleFonts: {
      families: {
         "Lexend Deca": {
            wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
         }
      }
   },
   tailwindcss: {
      config: {
         theme: {
            extend: {
               colors: {
                  primary: "#08301A",
                  text: "#D9D9D9",
                  stroke: "#006D4B",
                  background: "#030C07"
               },
               fontFamily: {
                  LexendDeca: ["Lexend Deca", "serif"]
               }
            }
         }
      }
   }
})