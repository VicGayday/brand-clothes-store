<template>
  <div class="error" v-if="error">
    <div class="error-text">{{ error }}</div>
    <button class="btn" @click="firstPage">Начать сначала</button>
  </div>
  <div class="main-wrapper" v-else>
    <div class="wrapper-product">
      <ProductItem
        v-for="product in goodsChunk"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="footer">
      <div>Страница: {{ page }}</div>
      <button class="btn" @click="nextPage">Показать еще</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import { useGoodsStore } from "@/stores/goodsStore"
import ProductItem from "@/components/ProductItem.vue"

export default defineComponent({
  name: "MainPage",
  components: { ProductItem },
  setup() {
    const store = useGoodsStore()
    const goods = computed(() => store.listOfGoods)
    const page = computed(() => store.page)
    const error = computed(() => store.errorMsg)
    const goodsChunk = computed(() => store.getGoods)
    console.log("goodsCh", goodsChunk, page)

    function nextPage() {
      store.setNextPage()
    }

    function firstPage() {
      store.setFirstPage()
    }

    onMounted(() => {
      store.fetchGoods()
    })
    return {
      store,
      goods,
      goodsChunk,
      page,
      nextPage,
      firstPage,
      error,
    }
  },
})
</script>

<style scoped>
.wrapper-product {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 10px;
}
.btn {
  padding: 3px 18px;
  color: #6A6A6A;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #FFFFFF;
  border: none;
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
  padding: 0 30px;;
}
</style>
