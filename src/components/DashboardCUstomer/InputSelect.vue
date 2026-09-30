<template>
  <select
    class="form-select"
    aria-label="Default select example"
    v-model="input"
  >
    <option
      v-for="item in Object.values(list)"
      :key="item"
      :value="item"
    >
      {{ item }}
    </option>
    <RequiredInputError :error="error" />
  </select>
</template>

<script setup lang="ts">
import type { Species } from "@/types";
import { RequiredInputError } from "../index";

const input = defineModel<string | null>();
defineProps<{
  list: Species;
  title: string;
  error?: string;
}>();
</script>

<style scoped></style>
