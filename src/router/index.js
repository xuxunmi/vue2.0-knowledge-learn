import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/father-slot',
    name: 'fatherSlot',
    component: () => import('../views/vue-slot/father-slot.vue')
  },
  {
    path: '/child-slot',
    name: 'childSlot',
    component: () => import('../views/vue-slot/child-slot.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
