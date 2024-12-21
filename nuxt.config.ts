// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   build: {
      transpile: ["gsap", "gsap/ScrollTrigger"]
   },
   modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-lucide-icons"],
   googleFonts: {
      families: {
         "Lexend Deca": {
            wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
         }
      }
   },
   app: {
      pageTransition: {
         name: "slide-right",
         mode: "out-in"
      }
   },
   tailwindcss: {
      cssPath: "~/assets/tailwind.css",
      config: {
         theme: {
            extend: {
               colors: {
                  primary: "#08301A",
                  text: "#D9D9D9",
                  stroke: "#006D4B",
                  background: "#05130b"
               },
               fontFamily: {
                  LexendDeca: ["Lexend Deca", "serif"]
               },
               keyframes: {
                  marquee: {
                     "0%": { transform: "translateX(0%)" },
                     "100%": { transform: "translateX(-100%)" }
                  },
                  "marquee-reverse": {
                     "0%": { transform: "translateX(-100%)" },
                     "100%": { transform: "translateX(0%)" }
                  }
               },
               animation: {
                  marquee: "marquee 100s linear infinite",
                  "marquee-reverse": "marquee-reverse 100s linear infinite"
               },
               cursor: {
                  click: "for gsap animation"
               }
            }
         }
      }
   }
})
