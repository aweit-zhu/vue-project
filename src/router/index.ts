import { useUserStore } from '@/stores/stores'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// 路由守衛器
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userStore.user) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
