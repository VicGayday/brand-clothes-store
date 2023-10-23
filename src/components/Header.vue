<template>
  <header class="header">
    <logo-image />
    <nav class="menu">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/basket">Корзина</router-link>
        </li>
      </ul>
    </nav>
    <button class="mobile-menu-btn">
      <svg-icon
        width="24"
        height="24"
        icon-name="mobile menu"
        icon-color="#ba967d"
      >
        <menu-image />
      </svg-icon>
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LogoImage from "@/components/icons/LogoImage.vue"
import MenuImage from "@/components/icons/MenuImage.vue"
import CloseImage from "@/components/icons/CloseImage.vue"
import SvgIcon from "./ui/SvgIcon.vue"

export default defineComponent({
  name: "Header",
  components: { LogoImage, CloseImage, SvgIcon, MenuImage },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.header {
  width: 100%;
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
}
.nav {
  display: flex;
  gap: 38px;
}
.nav-item a {
  color: var(--text-secondary);
}
.nav-item a.active {
  color: var(--text-active);
}
.mobile-menu-btn {
  display: none;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
}
@media (max-width: 600px) {
  .menu {
    display: none;
  }
  .mobile-menu-btn {
    display: block;
  }
}
</style>
