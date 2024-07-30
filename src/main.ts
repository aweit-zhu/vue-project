import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { useErrorStore } from './stores/stores'

const app = createApp(App)

// pinia
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

// router
app.use(router)

const { setError } = useErrorStore()

// error handle
app.config.errorHandler = (err, instance, info) => {
  const errorStore = useErrorStore() // 使用 Pinia store
  errorStore.setError(err)
}

app.mount('#app')
