import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { useErrorStore } from './stores/stores'
// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives
// })

const app = createApp(App)

// vuetify
//app.use(vuetify)

// pinia
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

// router
app.use(router)

// error handle
app.config.errorHandler = (err, instance, info) => {
  const errorStore = useErrorStore() // 使用 Pinia store
  errorStore.setError(err)
}

app.mount('#app')
