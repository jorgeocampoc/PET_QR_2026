<template>
  <tbody class="table-group-divider placeholder-glow">
    <tr v-for="value in 10">
      <td v-for="value in total">
        <span class="placeholder col-12"></span>
      </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
defineProps<{
  total: number;
}>();
</script>

<style scoped></style>
