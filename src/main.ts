import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { useErrorStore } from './stores/errorStore'
import { RegisterGlobalComponent } from './RefisterGlobalComponent'

const app = createApp(App)

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

RegisterGlobalComponent(app)

app.mount('#app')
