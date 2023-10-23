import { defineStore } from "pinia"

export const useCounterStore = defineStore("counte", {
  state: () => {
    return { page: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.page++
    },
  },
})
