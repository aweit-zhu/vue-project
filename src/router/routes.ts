import { type RouteLocationNormalized } from 'vue-router'
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
        path: 'demo',
        name: 'demo',
        children: [
          {
            path: 'query',
            name: 'query',
            component: () => import('@/views/examples/QueryExample.vue')
          }
        ]
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

export default routes
