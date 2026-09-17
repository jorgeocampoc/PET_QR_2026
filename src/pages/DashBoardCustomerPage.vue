<template>
    <main class="bg-light min-vh-100">
        <Navbar :items="MENU_ITEM_CUSTOMER" @current-item="handleCurrentItem"> </Navbar>/>
        <component :is="currentView" :key="currentView"></component>

    </main>
</template>

<script setup lang="ts">
import {
    Navbar,
    RegisterPet,
    ListPets,
} from '@/components/index';
import { MENU_ITEM_CUSTOMER } from '@/constants';
import type { ItemsCustomerItem } from '@/types';
import { ref, shallowRef, type Component } from 'vue';

const currentItem = ref<ItemsCustomerItem>(MENU_ITEM_CUSTOMER.listPets)
const currentView = shallowRef<Component>(ListPets)
const handleCurrentItem = (item: ItemsCustomerItem) => {
    if (!item) return
    currentItem.value = item;
    switch (item) {
        case MENU_ITEM_CUSTOMER.listPets:
            currentView.value = ListPets
            break;
        case MENU_ITEM_CUSTOMER.registerPet:
            currentView.value = RegisterPet
            break;

        default:
            break;
    }
}

</script>

<style scoped></style>