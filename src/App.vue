<script setup>
import HeaderVue from './components/HeaderVue.vue';
import TheWelcome from './components/TheWelcome.vue';
import FooterVue from './components/FooterVue.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const routeKey = computed(() => route.fullPath);
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <transition name="fade" mode="out-in">
    <router-view :key="routeKey"></router-view>
  </transition>

  <main>
    <TheWelcome />
  </main>

  <footer>
    <FooterVue />
  </footer>
</template>

<style scoped>
main {
  width: 100vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
