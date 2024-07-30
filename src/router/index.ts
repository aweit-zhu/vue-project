import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../views/MainLayout.vue'
import { useUserStore } from '@/stores/stores'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'hello',
        name: 'hello',
        component: () => import('../views/HelloView.vue')
      },
      {
        path: 'counter',
        name: 'counter',
        component: () => import('../views/CounterView.vue')
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/login/:id?',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
    props: (route: any) => ({ error: route.query.error })
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

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
