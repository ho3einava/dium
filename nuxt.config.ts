// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
 
app: {
  head :{
    htmlAttrs :{
      dir : "rtl"
    }
  }
},
    
  css : ['vuetify/_styles.scss','bootstrap-icons/font/bootstrap-icons.css','@mdi/font/css/materialdesignicons.css' ],
  
  build : {
    transpile : ['vuetify'],
    
  },
  
 
})
