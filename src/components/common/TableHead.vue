<template>
  <thead>
    <tr>
      <th
        scope="col"
        class="table-header-custom"
        v-for="(item, index) in data"
        :key="index"
      >
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
defineProps<{ data: string[] }>();
</script>

<style scoped></style>
