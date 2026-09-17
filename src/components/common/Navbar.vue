<template>
    <nav class="bg-light shadow ">
        <div class="d-flex justify-content-between flex-wrap ">
            <div class="col p-4 border-primary">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <img src="../../assets/images/logo.jpg" width="45" height="45" alt="" class="rounded-circle">
                    <span class="custom-name">{{ SYSTEM_NAME }}</span>
                </a>
            </div>
            <div class="py-4 text-center d-flex justify-content-center align-items-center   " v-for="item in items"
                :key="item">
                <div class=" custom-item" @click="handleItem(item)"> {{ item }} </div>
            </div>
            <div class="col p-4 text-end"> names </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { SYSTEM_NAME } from '@/constants';
import type { ItemsAdmin, ItemsCustomer } from '@/types';

defineProps<{
    items?: ItemsAdmin | ItemsCustomer
}>()

const emit = defineEmits(['currentItem'])
const handleItem = (item: string) => {
    emit('currentItem', item)
}

</script>

<style scoped>
nav {
    border-bottom: 5px solid var(--color-orange);
}

.custom-name {
    text-transform: uppercase;
    margin-left: 1rem;
    font-size: 1.5rem;
}

.custom-item {
    font-size: 1.3rem;
    margin: 0 1rem 0 1rem;

}
</style>