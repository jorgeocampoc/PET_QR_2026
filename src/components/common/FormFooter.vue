<template>
  <footer class="text-center small align-middle">
    <span class="text-color-blue">Developed By </span>
    <a
      class="fw-bold text-color-orange"
      :href="GITHUB_PAGE"
      target="_blank"
      >{{ ME }}</a
    >
  </footer>
</template>

<script setup lang="ts">
import { GITHUB_PAGE, ME } from "@/constants";
</script>

<style scoped>
footer {
  box-shadow: 0px -9px 58px -21px rgba(47, 59, 139, 0.46);
  -webkit-box-shadow: 0px -9px 58px -21px rgba(47, 59, 139, 0.46);
}
</style>
