import { useUserStore } from '@/stores/stores'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../views/MainLayout.vue'

// 路由設定
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
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('../views/ArticleView.vue'),
        props: (route: RouteLocationNormalized) => ({ id: route.params.id })
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/login/:id?',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
    props: (route: RouteLocationNormalized) => ({ error: route.query.error })
  }
]

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
