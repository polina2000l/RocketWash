import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RocketWash | Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'RocketWash | About' }
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import(/* webpackChunkName: "price" */ '../views/Price.vue'),
    meta: { title: 'RocketWash | Price' }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue'),
    meta: { title: 'RocketWash | Service' }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: { title: 'RocketWash | Team' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});

export default router
