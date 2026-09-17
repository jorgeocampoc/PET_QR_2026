<template>
    <div class="py-5" >
        <button class=" w-100 rounded-5 py-3 d-flex justify-content-center align-items-center" type="submit" :disabled="isLoading">
           <span class="px-2"> <LogIn v-if="!isLoading" /> <Loader class="spinner" v-else  /> </span> {{ type }} 
        </button>
    </div>
</template>

<script setup lang="ts">
import { LogIn,Loader  } from '@lucide/vue';
const props = defineProps<{
    type: string,
    isLoading?:boolean
}>()

</script>

<style scoped>

button{
    border: 1px solid var(--color-orange);
    background: var(--color-orange  );
    color: white;
    font-size: 1.3rem !important;
    cursor: pointer;
    transition: all 0.2s ease;  
}

button:hover{
    background: var(--color-orange-3) !important;
}

</style>