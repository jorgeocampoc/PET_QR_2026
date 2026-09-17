<template>
    <section
        class="flex-fill d-flex-colum  border-left-custom bg-light padding-custom-forms animate__animated animate__fadeInRightBig">
        <HeaderAuth />
        <form @submit.prevent="handleForm" class="d-flex justify-content-center align-items-center  flex-fill " :class="{'disable-form':isLoading}">
            <div class="col p-10">
                <FormTitle />
                <FormInput v-model="email" type="email" :errorMessage="emailError" placeholder="Email" />
                <FormInput v-model="password" type="password" :errorMessage="passwordError" placeholder="Password" />
                <FormButtonSend :type="currentForm" :isLoading="isLoading"/>
            </div>
        </form>
        <FormFooter />
    </section>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import { FormTitle, FormFooter, FormInput, FormButtonSend, HeaderAuth } from '../index.ts';
import type { LabelForm } from '@/types/index.ts';
import { useField, useForm } from 'vee-validate';
import { authSchema } from '../../schemas/index.ts'
import { toTypedSchema } from "@vee-validate/zod"
import { getLabelCurrentForm } from '@/utils/index.ts';
import { useAuth } from '@/composables/useAuth.ts';
const currentForm = ref<LabelForm>(getLabelCurrentForm())


const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(authSchema)
});

const { value: email, errorMessage: emailError } = useField<string>('email');
const { value: password, errorMessage: passwordError } = useField<string>('password');

const { login, isLoading } = useAuth()
const handleForm = handleSubmit(async (values) => {
    await login(values)
});
</script>


<style scoped>
.custom-paddins {
    padding: 15rem !important;
}

</style>