import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '@/components/shop/Shop';
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
