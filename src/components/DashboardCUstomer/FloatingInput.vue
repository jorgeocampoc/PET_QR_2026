<template>
  <div class="form-floating mb-4">
    <input
      :type="type"
      class="form-control"
      :id="id"
      placeholder=""
      v-model="input"
    />
    <RequiredInputError :error="error" />
    <label :for="id">{{ title }}</label>
  </div>
</template>

<script setup lang="ts">
import { RequiredInputError } from "../index";

const input = defineModel<string | null>();
defineProps<{
  type: string;
  title: string;
  error?: string;
}>();

const id = `input-${crypto.randomUUID()}`;
</script>

<style scoped></style>
