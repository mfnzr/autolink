import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FipeAPI from '@/views/FipeApiView.vue'
import RegisterNewVehicleView from '@/views/RegisterNewVehicleView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fipe-api',
    name: 'FipeAPI',
    component: FipeAPI
  },
  {
    path: '/register-new-vehicle',
    name: 'VehicleRegister',
    component: RegisterNewVehicleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
