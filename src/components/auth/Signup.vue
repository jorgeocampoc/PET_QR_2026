<template>
  <section
    class="flex-fill d-flex-colum border-left-custom position-relative padding-custom-forms animate__animated animate__fadeInRightBig bg-light"
    :class="{'form-disabled':isLoading}"
  >
    <HeaderAuth :is-loading="isLoading" />
    <form
      @submit.prevent="handleForm"
      class="d-flex justify-content-center align-items-center"
      :class="{'disable-form':isLoading}"
    >
      <div class="col p-10">
        <FormTitle />
        <FormInput
          v-model="first_name"
          type="text"
          placeholder="First name"
          :errorMessage="first_nameError"
        />
        <FormInput
          v-model="last_name"
          type="text"
          placeholder="Last name"
          :errorMessage="last_nameError"
        />
        <FormInput
          v-model="email"
          type="email"
          :errorMessage="emailError"
          placeholder="Email"
        />
        <FormInput
          v-model="password"
          type="password"
          :errorMessage="passwordError"
          placeholder="Password"
        />
        <FormButtonSend :type="currentForm" :is-loading="isLoading"</FormButtonSend>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from "vue";
import { FormTitle, FormFooter, FormInput, FormButtonSend, HeaderAuth } from "../index.ts";
import { useField, useForm } from "vee-validate";
import { getLabelCurrentForm } from "@/utils/index.ts";
import type { AuthForm, LabelForm } from "@/types/index.ts";
import { toTypedSchema } from "@vee-validate/zod";
import { registerUserSchema } from "@/schemas/index.ts";
import { useUser } from "@/composables/index.ts";
import { API_ROUTES_USER, AUTH_FORM, LABEL_FORM } from "@/constants/index.ts";

const { handleCurrent, form } = inject<{
  handleCurrent: () => void;
  form: Ref<AuthForm>;
}>("changeForm")!;

const currentForm = ref<LabelForm>(getLabelCurrentForm());
const { isLoading, registerUser } = useUser();
const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(registerUserSchema),
});
const { value: first_name, errorMessage: first_nameError } = useField<string>("first_name");
const { value: last_name, errorMessage: last_nameError } = useField<string>("last_name");
const { value: email, errorMessage: emailError } = useField<string>("email");
const { value: password, errorMessage: passwordError } = useField<string>("password");

const handleForm = handleSubmit(async (values) => {
  const band = await registerUser(API_ROUTES_USER.POST_USER, values);
  if (!band) return;
  form.value = AUTH_FORM.login;
  resetForm();
  handleCurrent();
});
</script>

<style scoped>
.custom-abs {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%);
}
</style>
