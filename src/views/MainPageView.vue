<template>
  <div class="content">
    <div class="wrapper-product" v-if="error">
      <div class="error-text">{{ error }}</div>
    </div>

    <div class="wrapper-product" v-else>
      <ProductItem
        v-for="product in goodsChunk"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  <div class="footer">
    <div>Страница: {{ page }}</div>
    <span class="msg">{{ basketStore.msg }}</span>
    <div class ="btns-wrapper">
      <button v-if="page !== 1 && !error" class="btn" @click="previousPage">Назад</button>
      <button class="btn" @click="nextPage">
        {{ !error ? "Показать еще" : "Начать сначала" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import { useGoodsStore } from "@/stores/goodsStore"
import { useBasketStore } from "@/stores/basketStore"

import ProductItem from "@/components/ProductItem.vue"

export default defineComponent({
  name: "MainPageView",
  components: { ProductItem },
  setup() {
    const store = useGoodsStore()
    const goods = computed(() => store.listOfGoods)
    const page = computed(() => store.page)
    const error = computed(() => store.errorMsg)

    const goodsChunk = computed(() => store.getGoods)
    const basketStore = useBasketStore()

    function nextPage() {
      if (error.value) {
        store.setFirstPage()
        basketStore.clearMsg()
      } else {
        store.setNextPage()
        basketStore.clearMsg()
      }
    }

    function previousPage() {
        basketStore.clearMsg()
        store.setPreviousPage();
    }

    onMounted(() => {
      store.fetchGoods()
      basketStore.clearMsg()
    })
    return {
      store,
      goods,
      goodsChunk,
      page,
      nextPage,
      basketStore,
      error,
      previousPage,
    }
  },
})
</script>

<style scoped>
.content {
  flex: 1 1 auto;
}
.wrapper-product {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 10px;
}
.btn {
  padding: 3px 18px;
  color: var(--text-secondary);
  box-shadow: var(--button-shadow);
  border: none;
  background-color: var(--background-primary);
  margin-left: 10px;
}
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.error-text {
  color: red;
  font: var(--font-l);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 30px;
}

.btns-wrapper {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .wrapper-product {
    flex-wrap: wrap;
  }
  .footer {
    flex-direction: column;
  }
}
</style>
