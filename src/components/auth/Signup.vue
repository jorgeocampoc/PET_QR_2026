<template>
    <section
        class=" flex-fill d-flex-colum border-left-custom position-relative padding-custom-forms animate__animated animate__fadeInRightBig bg-light">
        <HeaderAuth />
        <form @submit.prevent="handleForm" class="d-flex justify-content-center align-items-center  ">
            <div class="col p-10 ">
                <FormTitle />
                <FormInput v-model="first_name" type="text" placeholder="First name" :errorMessage="first_nameError" />
                <FormInput v-model="last_name" type="text" placeholder="Last name" :errorMessage="last_nameError" />
                <FormInput v-model="email" type="email" :errorMessage="emailError" placeholder="Email" />
                <FormInput v-model="password" type="password" :errorMessage="passwordError" placeholder="Password" />
                <FormButtonSend :type="currentForm" />
            </div>
        </form>
        <FormFooter class="custom-abs" />
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FormTitle, FormFooter, FormInput, FormButtonSend, HeaderAuth } from '../index.ts';
import { useField, useForm } from 'vee-validate';
import { getLabelCurrentForm } from '@/utils/index.ts';
import type { LabelForm } from '@/types/authForm.ts';
import { toTypedSchema } from '@vee-validate/zod';
import { registerSchema } from '@/schemas/index.ts';

const currentForm = ref<LabelForm>(getLabelCurrentForm())

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(registerSchema)
});
const { value: first_name, errorMessage: first_nameError } = useField<string>('first_name');
const { value: last_name, errorMessage: last_nameError } = useField<string>('last_name');
const { value: email, errorMessage: emailError } = useField<string>('email');
const { value: password, errorMessage: passwordError } = useField<string>('password');

const handleForm = handleSubmit((values) => {
    console.log(values);
});

</script>

<style scoped>

.custom-abs{
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translate(-50%);
}

</style>