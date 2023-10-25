import { defineStore } from "pinia"

interface State {
  listOfBasket: any[]
  msg: string
}

export const useBasketStore = defineStore("basketStore", {
  state: (): State => ({
    listOfBasket: [],
    msg: "",
  }),

  getters: {
    basketLength(state) {
      return state.listOfBasket.length
    },
  },

  actions: {
    addItem(product: any) {
      this.listOfBasket.push(product)
      this.msg = `Добавлено: ${product.title}`
    },

    removeItem(product: any) {
      this.msg = `Удалено: ${product.title}`

      const i = this.listOfBasket.findIndex((s) => s.id === product.id)
      if (i > -1) this.listOfBasket.splice(i, 1)
    },

    clearMsg() {
      this.msg = ""
    },
  },
})
