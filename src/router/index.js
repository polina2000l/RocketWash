import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'
import Price from '@/views/Price'
import Registration from '@/views/Registration'
import Service from '@/views/Service'
import Team from '@/views/Team'
import Auth from '@/views/Auth'

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
    component: About,
    meta: { title: 'RocketWash | About' }
  },
  {
    path: '/price',
    name: 'Price',
    component: Price,
    meta: { title: 'RocketWash | Price' }
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: { title: 'RocketWash | Service' }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: { title: 'RocketWash | Team' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration,
    meta: { title: 'RocketWash | Register' }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: { title: 'RocketWash | Auth' }
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
