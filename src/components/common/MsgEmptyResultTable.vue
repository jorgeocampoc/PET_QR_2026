<template>
  <div class="my-2 text-center">
    <span class="text-center fs-5">
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
