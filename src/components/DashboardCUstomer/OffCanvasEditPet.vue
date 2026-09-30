<template>
  <div>
    <BOffcanvas
      id="offcanvas-locations"
      v-model="show"
      :placement="placement"
      no-backdrop
      no-header
      class="bg-color-blue"
    >
      <main class="text-light">
        <header class="border-bottom border-light mb-4 position-relative">
          <h4 class="text-center text-uppercase fw-semibold my-3">Edit PEt</h4>
          <CircleX
            class="position-absolute end-0 top-0 icon-hover-orange"
            @click="() => (show = !show)"
          />
        </header>
        <section>
          <form
            @submit.prevent="handleForm"
            class="d-flex flex-column"
          >
            <FloatingInput
              title="Pet name"
              type="text"
              v-model="pet_name"
              :error="petNameError"
            />
            <div class="col mb-4">
              <InputSelect
                :list="SPECIES"
                title="Select Species"
                v-model="species"
                :error="speciesError"
              />
            </div>
            <FloatingInput
              title="Reference"
              type="text"
              v-model="reference"
              :error="referenceError"
            />
            <div class="row m-auto w-75">
              <BtnForm
                title="update"
                :isLoading="isLoading"
              />
            </div>
          </form>
        </section>
      </main>
    </BOffcanvas>
  </div>
</template>

<script setup lang="ts">
import type { PetSchema, PlacementCanvas, UpdatePetSchema } from "@/types";
import { BOffcanvas } from "bootstrap-vue-next";
import { BtnForm, FloatingInput, FormInput, InputSelect } from "../index";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { updatePetSchema } from "@/schemas";
import { API_ROUTES_PET, SPECIES } from "@/constants";
import { watch } from "vue";
import { CircleX } from "@lucide/vue";
import { usePet } from "@/composables";

const show = defineModel<boolean>();

const props = defineProps<{
  placement: PlacementCanvas;
  pet: PetSchema | null;
}>();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(updatePetSchema),
});

const { value: pet_name, errorMessage: petNameError } = useField<string>("pet_name");
const { value: species, errorMessage: speciesError } = useField<string>("species");
const { value: reference, errorMessage: referenceError } = useField<string>("reference");
const { value: id, errorMessage: idError } = useField<string>("id");

const { updatePet, isLoading } = usePet();
const emit = defineEmits(["update"]);
const handleForm = handleSubmit(async (values: UpdatePetSchema) => {
  const band = await updatePet(API_ROUTES_PET.BASE_PETS, values);
  if (band) {
    resetForm();
    emit("update");
    show.value = false;
  }
});

watch(
  () => props.pet,
  (newPet) => {
    if (newPet) {
      pet_name.value = newPet?.pet_name;
      id.value = newPet?.id;
      species.value = newPet?.species;
      reference.value = newPet?.reference;
    }
  },
  { immediate: true },
);
</script>

<style scoped></style>
