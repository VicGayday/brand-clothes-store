<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/logo.svg" alt="Лого" />
    </router-link>

    <nav class="nav">
      <ul
        class="menu"
        :class="isOpen ? 'open-menu' : 'closed-menu'"
        @click="handleClick"
      >
        <li class="menu-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/basket">Корзина</router-link>
        </li>
      </ul>
    </nav>
    <button
      class="mobile-menu-btn"
      :class="{ 'btn-close': isOpen }"
      @click="toggleMenu"
    >
      <span v-for="i in 4" class="line"></span>
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "Header",
  setup() {
    let isOpen = ref(false)
    const toggleMenu = () => (isOpen.value = !isOpen.value)

    function handleClick(e: any) {
      isOpen.value = false
    }

    return {
      isOpen,
      toggleMenu,
      handleClick,
    }
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
  position: relative;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  display: flex;
  gap: 38px;
  background-color: var(--background-primary);

  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-item a {
  color: var(--text-secondary);
}
.menu-item a.active {
  color: var(--text-active);
}
.mobile-menu-btn {
  display: none;
}
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    margin-right: 30px;
    position: relative;
  }
  .menu {
    flex-direction: column;
    width: 100%;
    margin-top: -10px;
    padding: 150px;
    transition: all 0.2s ease-out;
  }
  .open-menu {
    opacity: 1;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  .nav {
    flex-direction: column;
    z-index: 100;
    position: absolute;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    bottom: 0;
  }

  /*====================== иконка мобильного меню */
  .line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-active);
  }
  .line:nth-child(1) {
    top: 0px;
  }
  .line:nth-child(2) {
    top: 12px;
    transition: 0.3s ease;
  }
  .line:nth-child(3) {
    top: 12px;
    transition: 0.3s ease;
  }
  .line:nth-child(4) {
    top: 24px;
  }
  .btn-close .line:nth-child(1) {
    transform: scaleX(0);
  }
  .btn-close .line:nth-child(2) {
    transform: rotate(45deg);
    transition: 0.3s ease;
  }
  .btn-close .line:nth-child(3) {
    transform: rotate(-45deg);
    transition: 0.3s ease;
  }
  .btn-close .line:nth-child(4) {
    transform: scaleX(0);
  }
}
</style>
