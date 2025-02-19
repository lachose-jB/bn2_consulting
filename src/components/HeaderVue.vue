<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <!-- Navbar & Carousel Start -->
    <section class="container-fluid position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3 py-lg-0">
        <a href="/" class="navbar-brand p-0">
          <figure class="logobn2">
            <img src="@/assets/img/logobn2.png" alt="Logo BN2" class="img-fluid" />
          </figure>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <section class="collapse navbar-collapse" id="navbarCollapse">
          <article class="navbar-nav ms-auto py-0">
            <RouterLink to="/" class="nav-item nav-link">Accueil</RouterLink>
          </article>
        </section>
      </nav>
    </section>
  <router-view></router-view>
    <!-- Navbar & Carousel End -->
</template>



<style scoped>
/* Ajoute ton propre style si nécessaire */

</style>
