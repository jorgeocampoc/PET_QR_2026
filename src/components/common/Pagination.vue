<template>
  <div
    class="my-3"
    :class="{ 'form-disabled': isLoading }"
  >
    <BPagination
      v-model="currentPage"
      :total-rows="pagination?.totalPages"
      :per-page="1"
      class="content"
      :class="{ 'disable-form': isLoading }"
      align="center"
    />
  </div>
</template>

<script setup lang="ts">
import type { PaginationContect, PaginationmailSchema } from "@/types";
import { BPagination } from "bootstrap-vue-next";
import { ref, watch, inject } from "vue";
const props = defineProps<{
  pagination: PaginationmailSchema | null;
  isLoading: boolean;
}>();
const { currentPage } = inject<PaginationContect>("pagination", { currentPage: ref(1) });
const emit = defineEmits(["updatePage"]);

watch(currentPage, (newPage) => {
  currentPage.value = newPage;
  emit("updatePage");
});
</script>

<style scoped>
.content {
  padding: 1rem;
  background-color: white;
  border-radius: 2rem;
  border: 1px solid var(--color-blue);
  color: red;
}

:deep(.page-link) {
  border-radius: 50%;
  background-color: white;
  color: var(--color-blue);
  margin: 0 0.5rem 0 0.5rem;
  border: 1px solid var(--color-blue);
}

:deep(.page-link):hover {
  background-color: var(--color-blue) !important;
  transition: all 0.5s ease !important;
  color: white !important;
}

:deep(.page-item.active .page-link) {
  background-color: var(--color-blue);
  border-color: var(--color-blue);
  color: white;
}

:deep(.page-link[aria-label="Go to first page"]),
:deep(.page-link[aria-label="Go to last page"]) {
  border-radius: 50%;
  background-color: white !important;
  border: none;
}
:deep(.page-link[aria-label="Go to first page"]):hover,
:deep(.page-link[aria-label="Go to last page"]):hover {
  color: var(--color-orange) !important;
}
</style>
