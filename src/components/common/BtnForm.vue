<template>
  <button
    class="rounded-3"
    :disabled="isLoading"
  >
    <span class="hover-bg"></span>
    <span
      v-if="!isLoading"
      class="custom-title"
      >{{ title }}</span
    >
    <span v-else>
      <Loader class="spinner text-light" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { Loader } from "@lucide/vue";

defineProps<{
  title: string;
  isLoading: boolean;
}>();
</script>

<style scoped>
button {
  background-color: var(--color-orange);
  color: wheat;
  padding: 1rem 0 1rem 0;
  border: 1px solid white;
  position: relative;
}

.custom-title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
}

.hover-bg {
  position: absolute;
  inset: 0;
  background-color: white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s ease;
  z-index: -1;
}

button:hover .hover-bg {
  transform: scaleX(1);
}
</style>
