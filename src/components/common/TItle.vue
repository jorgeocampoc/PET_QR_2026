<template>
    <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
import type { ViewTitle } from '@/types';

defineProps<{
    title: ViewTitle
}>()
</script>

<style scoped>
h1 {
    color: var(--color-blue);
    font-weight: 500;
    font-size: 2.5rem;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 2rem 0 2rem 0;
    margin: 0;
}
</style>