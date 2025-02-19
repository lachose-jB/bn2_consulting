<script setup>
import { defineProps } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
 <!-- Spinner Start -->
    <section id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <article class="spinner"></article>
    </section>
</template>
