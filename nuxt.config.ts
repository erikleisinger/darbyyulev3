import { iconsPlugin, getIconCollections }  from "@egoist/tailwindcss-icons"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/ymd1vjy.css' }],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },
      ],

      title: "Darby yule",
    }
  },

  css: ['~/styles/index.scss'],
  devtools: { enabled: false },
  googleFonts: {
    families: {
      "Darker Grotesque": {
        wght: "300..900",
      }
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  
  ],
  runtimeConfig: {
    public: {
      web3Key: process.env.NUXT_WEB3_KEY
    }
  },
  ssr: false,
  tailwindcss: {
    config: {
      content: [
        "~/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "~/components/**/*.{js,ts,jsx,tsx,mdx}",
        "~/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        colors: {
          mustard: '#C99608',
          canary: '#f5b900',
          black: '#2E2A21',
          white: '#fefefe',
          gold: '#7D5D05',
        },
       
      
      },
      plugins: [
        iconsPlugin({
          // Select the icon collections you want to use
          collections: getIconCollections(["carbon", "ic"]),
        }),
        function({ addBase, theme }) {
          function extractColorVars(colorObj, colorGroup = '') {
            return Object.keys(colorObj).reduce((vars, colorKey) => {
              const value = colorObj[colorKey];
    
              const newVars =
                typeof value === 'string'
                  ? { [`--color${colorGroup}-${colorKey}`]: value }
                  : extractColorVars(value, `-${colorKey}`);
    
              return { ...vars, ...newVars };
            }, {});
          }
    
          addBase({
            ':root': extractColorVars(theme('colors')),
          });
        },
      ],
    }
  },

  typescript: {
    typeCheck: false,
  },
  vite: {
 
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})