<template>
    <header class="d-flex justify-content-around">
        <div class="col d-flex align-items-center">
            <PawPrint :size="32" color="var(--color-orange)" />
            <span class="custom-name">
                {{ SYSTEM_NAME }}
            </span>
        </div>
        <button class="btn btn-outline-dark " @click="updateForm">{{ currentForm }}</button>
    </header>
</template>

<script setup lang="ts">
import { AUTH_FORM, LABEL_FORM, SYSTEM_NAME } from "@/constants";
import type { AuthForm } from '@/types/index';
import { PawPrint } from '@lucide/vue';
import { computed, inject, type Ref } from "vue";
const { handleCurrent, form } = inject<{ handleCurrent: () => void, form: Ref<AuthForm> }>('changeForm')!;
const currentForm = computed(() =>
    form.value == AUTH_FORM.login ? LABEL_FORM.signup : LABEL_FORM.login
)
const updateForm = () => {

    if (!form.value) return
    switch (form.value) {
        case AUTH_FORM.login:
            form.value = AUTH_FORM.signUp
            break;
        case AUTH_FORM.signUp:
            form.value = AUTH_FORM.login
            break;

        default:
            break;
    }
    handleCurrent()
}
</script>

<style scoped>
.custom-name {
    padding-left: 0.5rem;
    text-transform: uppercase;
    font-weight: 400;
    font-size: x-large;
    padding-left: 0.5rem;
}
</style>