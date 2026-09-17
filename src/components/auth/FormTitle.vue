<template>
    <h2 class=" py-3 custom-font fs-1">
        {{ currentForm }}
    </h2>
</template>

<script setup lang="ts">
import { AUTH_FORM, LABEL_FORM } from '@/constants';
import type { AuthForm } from '@/types';
import { computed, inject, type Ref } from 'vue';

const { form } = inject<{ form: Ref<AuthForm> }>('changeForm')!;
const currentForm = computed(() =>
    form.value == AUTH_FORM.login ? LABEL_FORM.login : LABEL_FORM.signup)
</script>

<style scoped>
.fs-1 {
    font-size: calc(2.100rem + 1.5vw) !important;
}
</style>