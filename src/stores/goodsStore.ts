import { defineStore } from "pinia"
import axios from "axios"
import { data } from "@/data/data"

export interface State {
  listOfGoods: any[]
  page: number
  errorMsg: string
}

export const useGoodsStore = defineStore("goodsStore", {
  state: (): State => ({
    listOfGoods: [],
    page: 1,
    errorMsg: "",
  }),
  getters: {
    getGoods(state) {
      return state.listOfGoods.slice(
        (state.page - 1) * 4,
        (state.page - 1) * 4 + 4
      )
    },
  },
  actions: {
    async fetchGoods() {
      try {
        const response = await axios(
          "https://api.platovcorp.site/product.json"
          // {
          //   params: {
          //     _page: this.page,
          //     _limit: 4,
          //   },
          // }
        )
        if (!response.data) {
          console.log("error")
        } else {
          this.listOfGoods = response.data
        }
      } catch (error) {
        console.error(error)
      }
    },

    getData() {
      this.listOfGoods = data
    },

    setNextPage() {
      //если текущая страница все еще меньше общего кол-ва страниц
      if (this.page + 1 < this.listOfGoods.length / 4) {
        this.page += 1
      } else {
        this.errorMsg = "Нет больше товаров"
      }
    },

    setPreviousPage() {
      // Если текущая страница больше 1
      if (this.page - 1 >= 1) {
        this.page -= 1
      }
    },

    setFirstPage() {
      this.page = 1
      this.errorMsg = ""
    },
  },
})
