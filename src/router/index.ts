import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import MainPage from "../views/MainPage.vue"
import Basket from "../views/Basket.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
})

export default router
