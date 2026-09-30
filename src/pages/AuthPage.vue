<template>
  <main class="container-auth">
    <header class="flex-fill custom-header-image custom-image-background"></header>
    <component
      :is="currentForm"
      :key="form"
    ></component>
  </main>
</template>

<script setup lang="ts">
import { Login, Signup } from "@/components";
import { AUTH_FORM } from "@/constants";
import type { AuthForm } from "@/types";
import { provide, ref, shallowRef, type Component } from "vue";

const currentForm = shallowRef<Component>(Login);
const form = ref<AuthForm>(AUTH_FORM.login);
const handleCurrent = () => {
  if (!form.value) {
    return;
  }

  switch (form.value) {
    case AUTH_FORM.login:
      currentForm.value = Login;
      break;
    case AUTH_FORM.signUp:
      currentForm.value = Signup;
      break;

    default:
      break;
  }
};

provide("changeForm", {
  handleCurrent,
  form,
});
</script>

<style scoped>
.container-auth {
  display: flex;
  flex: 0 0 auto;
  min-width: 0;
  width: 100%;
  min-height: 100dvh;
  max-height: 100dvh;
}

.container-auth > * {
  flex: 1;
  min-width: 0;
  max-width: 50dvw;
}

.padding-custom-forms {
  padding: 4rem;
}

main {
  overflow-x: clip;
  overflow-y: hidden;
}

.custom-header-image {
  background-image: url("../assets/images/auth.png");
}
</style>
