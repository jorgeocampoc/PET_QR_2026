<template>
    <h2 class="text-light mt-5 text-center">{{ title }}</h2>
</template>

<script setup lang="ts">

defineProps<{ title: string }>()

</script>

<style scoped>
h2{
    text-decoration: underline !important;
    text-underline-offset: 10px;
}
</style>