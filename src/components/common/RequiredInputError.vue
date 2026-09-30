<template>
    <div class="text-danger mt-1">{{ error }}</div>
</template>

<script setup lang="ts">
defineProps<{error?:string}>()
</script>

<style scoped>

</style>