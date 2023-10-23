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
      console.log("22", state.page)

      return state.listOfGoods.slice(
        (state.page - 1) * 4,
        (state.page - 1) * 4 + 4
      )
    },
  },
  actions: {
    //вместо api
    getData() {
      this.listOfGoods = data
    },

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

    setNextPage() {
      //если текущая страница все еще меньше общего кол-ва страниц
      if (this.page + 1 < this.listOfGoods.length / 4) {
        this.page++
      } else {
        this.errorMsg = "нет больше товаров"
      }
    },

    setFirstPage() {
      this.page = 1
      this.errorMsg = ""
    },
  },
})
