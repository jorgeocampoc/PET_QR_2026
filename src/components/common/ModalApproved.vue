<template>
  <div
    class="modal"
    tabindex="-1"
    id="modal-approved-action"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered animate__animated"
      :class="{
        animate__fadeIn: !animationClose,
        animate__fadeOutUp: animationClose,
      }"
    >
      <div class="modal-content bg-color-orange border-light">
        <div class="modal-body">
          <header>
            <H5 title="Delete Pet" />
          </header>
          <section class="content">
            <p class="text-center m-0 text-light text-capitalize">
              Are you sure you want to delete this pet? This action cannot be undone.
            </p>
          </section>
        </div>
        <div
          class="modal-footer d-flex justify-content-center gap-2 bg-light"
          :class="{ 'disable-form': isLoading }"
        >
          <button
            v-if="!isLoading"
            @click="handleModal('cancel')"
            :disabled="isLoading"
            class="btn btn-outline-danger px-4 text-uppercase"
          >
            Close
          </button>
          <button
            @click="handleModal('delete')"
            :disabled="isLoading"
            class="btn btn-outline-success px-4 text-uppercase"
          >
            <span v-if="!isLoading">delete</span>
            <Loader
              v-else
              class="spinner"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader } from "@lucide/vue";
import { H5 } from "./../index";

defineProps<{
  animationClose?: boolean;
  isLoading?: boolean;
}>();
const emit = defineEmits(["closeModal"]);
const handleModal = (act: string) => {
  if (!act) return;
  console.log(act);

  emit("closeModal", act);
};
</script>

<style scoped>
.content {
  padding: 1rem 1rem 0 1rem;
}
.modal-footer {
  border: 2px double var(--color-orange);
  border-top: 0;
}
</style>
