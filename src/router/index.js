import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Center from '@/views/Center.vue'
import a from '@/views/a.vue'
import b from '@/views/b.vue'
import c from '@/views/c.vue'

const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'center',
    component: Center,
    redirect: '/a',
    children: [
      {
        path: '/',
        name: 'a',
        component: a
      },
      {
        path: '/',
        name: 'b',
        component: b
      },
      {
        path: '/',
        name: 'c',
        component: c
      },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
