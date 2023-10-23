<template>
  <div class="wrapper">
    <img class="product-image" src="../assets/product.jpg" alt="product" />
    <div class="inner">
      <div class="title">{{ product.title }}</div>
      <p class="desc">{{ product.description }}></p>

      <div class="footer">
        <div class="price">
          {{ `${product.price} ₽` }}
        </div>
        <button class="btn" @click="addProduct">
          <svg-icon width="17" height="20" icon-name="basket">
            <basket-image />
          </svg-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useBasketStore } from "@/stores/basketStore"
import BasketImage from "./icons/BasketImage.vue"
import SvgIcon from "./ui/SvgIcon.vue"

export default defineComponent({
  name: "ProductItem",
  components: { BasketImage, SvgIcon },
  props: {
    product: { type: Object, required: true },
  },
  setup(props) {
    const basketStore = useBasketStore()

    const addProduct = () => basketStore.addItem(props.product)

    return { basketStore, addProduct }
  },
})
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--background-primary);
  box-shadow: var(--box-shadow);
}
.inner {
  padding: 20px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
   height: calc(100vh - 500px);
}
.title {
  font: var(--font-l);
  color: var(--text-primary);
}
.desc {
  font: var(--font-s);
  color: var(--text-primary-sub);
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100px;
  width: 220px;
  white-space: nowrap;
  display: inline-block;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
}
.price {
  font: var(--font-m);
}
.btn {
  width: 20px;
  border: none;
  outline: none;
  background-color: transparent;
}

.product-image {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
