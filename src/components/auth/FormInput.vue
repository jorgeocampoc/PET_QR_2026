<template>
    <div class="py-3">
        <input :type="type" v-model="model" autocomplete="true" class="rounded-5" :placeholder="placeholder">
        <div v-if="errorMessage" class="text-danger px-3 fw-lighter ">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup lang="ts">
const model = defineModel<string | null>()
defineProps<{
    type: string,
    errorMessage?: string
    placeholder: string
}>()

</script>

<style scoped>
input {
    width: 100%;
    border: 1px solid var(--color-orange-2);
    padding: 1rem 1rem 1rem 2rem;
    transition: all 0.5s ease;
    font-weight: 50 !important;

}

input:focus {
    border: 2px solid var(--color-orange);
    outline: none;
    padding-left: 2rem;

}



input::placeholder {
    padding-left: 0.5rem;
}
</style>