import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FipeAPI from '@/views/FipeApiView.vue'
import RegisterNewVehicleView from '@/views/RegisterNewVehicleView.vue'
import SoldVehicles from '@/views/SoldVehicles.vue'

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
  },
  {
    path: '/sold-vehicles',
    name: 'SoldVehicles',
    component: SoldVehicles
  }
]

const router = createRouter({
  history: createWebHistory('/autolink/'),  // use a base do GitHub Pages aqui
  routes
})


export default router
