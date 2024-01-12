import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import barChartCard from '../views/Home2.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/purchases',
    name: 'purchases',
    component: barChartCard
  },
]

const router = new VueRouter({
  routes
})

export default router
