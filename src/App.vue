<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from "./components/Header.vue"
export default defineComponent({
  name: "App",
  components: { Header },
})
</script>

<style></style>
