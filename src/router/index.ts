import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import MainPageView from "../views/MainPageView.vue"
import BasketView from "../views/BasketView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPageView,
  },
  {
    path: "/basket",
    name: "Basket",
    component: BasketView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
})

export default router
