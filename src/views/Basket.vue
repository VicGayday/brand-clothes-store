<template>
  <div class="wrapper-basket" v-if="basketLength">
    <BasketItem
      v-for="product in basketList"
      :key="product.id"
      :product="product"
    />
  </div>
  <div class="message" v-else>Корзина пуста</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useBasketStore } from "@/stores/basketStore"
import BasketItem from "@/components/BasketItem.vue"

export default defineComponent({
  name: "Basket",
  components: { BasketItem },
  setup() {
    const basketStore = useBasketStore()
    const basketList = computed(() => basketStore.listOfBasket)
    const basketLength = computed(() => basketStore.basketLength)

    return { basketList, basketLength }
  },
})
</script>

<style scoped>
.wrapper-basket {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
}
.message {
  display: flex;
  justify-content: center;
}
</style>
