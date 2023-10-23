import { defineStore } from "pinia"

interface State {
  listOfBasket: any[]
  count: number
}

export const useBasketStore = defineStore("basketStore", {
  state: (): State => ({
    listOfBasket: [],
    count: 0,
  }),

  getters: {
    basketLength(state) {
      return state.listOfBasket.length
    },
  },

  actions: {
    addItem(product: any) {
      this.listOfBasket.push(product)
    },
    removeItem(product: any) {
      const i = this.listOfBasket.findIndex((s) => s.id === product.id)
      if (i > -1) this.listOfBasket.splice(i, 1)
    },
  },
})
