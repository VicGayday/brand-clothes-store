<template>
  <div class="wrapper">
    <img src="../assets/product.jpg" alt="product" />
    <div class="inner">
      <button class="btn" @click="removeProduct">
        <svg-icon width="17" height="20" icon-name="basket">
          <close-image />
        </svg-icon>
      </button>
      <div class="title">{{ product.title }}</div>
      <p class="desc">{{ product.description }}></p>
      <div class="price">
        {{ `${product.price} ₽` }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useBasketStore } from "@/stores/basketStore"
import CloseImage from "./icons/CloseImage.vue"
import SvgIcon from "./ui/SvgIcon.vue"

export default defineComponent({
  name: "BasketItem",
  components: { CloseImage, SvgIcon },
  props: {
    product: { type: Object, required: true },
  },
  setup(props) {
    const basketStore = useBasketStore()

    function removeProduct() {
      basketStore.removeItem(props.product)
    }

    return { basketStore, removeProduct }
  },
})
</script>

<style scoped>
.wrapper {
  width: 500px;
  height: 250px;
  display: grid;
  grid-template-columns: 200px 280px;
  gap: 20px;
}
.inner {
  display: grid;
  grid-template-rows: 20px 30px 100px 40px;
  justify-items: flex-end;
}
.title {
  justify-self: flex-start;
  font: var(--font-l);
  color: var(--text-primary);
}
.desc {
  justify-self: flex-start;
  overflow: scroll;
  font: var(--font-s);
  color: var(--text-primary-sub);
  margin-right: 10px;
}
.price {
  justify-self: flex-start;
  font: var(--font-m);
  margin-top: 10px;
}
.btn {
  width: 20px;
  border: none;
  outline: none;
  background-color: transparent;
}
</style>
