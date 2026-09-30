<template>
  <input
    type="file"
    class="form-control"
    accept="image/*"
    @change="handleImage"
  />
  <RequiredInputError :error="error" />
</template>

<script setup lang="ts">
import { getExt, validateExt } from "@/utils";
import { RequiredInputError } from "../index";

const props = defineProps<{
  error?: string;
}>();

const image = defineModel<File | null>();

const handleImage = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0] ?? null;
  if (file) {
    const ext = getExt(file.name);
    if (!validateExt(ext)) {
      image.value = null;
      return;
    }
  }

  image.value = file;
};
</script>

<style scoped></style>
