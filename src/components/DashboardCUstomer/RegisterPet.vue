<template>
  <main class="d-flex flex-column flex-grow-1 h-100 border-blue-view custom-image-background">
    <Title :title="VIEW_TITLE.formRegisterPet" />
    <div class="container-lg flex-fill mb-5 d-flex justify-content-center align-items-center flex-wrap">
      <ModalQr
        :data-media="dataMedia"
        @closeModal="handleCloseModal"
        type-media="qr"
      />
      <div
        class="form-content bg-color-blue col-7 d-flex flex-column position-relative"
        :class="{ 'form-disabled': isLoading }"
      >
        <div class="card-top">
          <PawPrint
            class="custom-icon"
            :size="80"
          />
        </div>
        <Subtitle title="Pet Information" />
        <form
          class="text-light w-75 m-auto"
          @submit.prevent="handleForm"
          :key="key"
          :class="{ 'disable-form': isLoading }"
        >
          <div class="text-light text-center pb-5">
            <Dog
              v-if="species === SPECIES.DOG"
              :size="50"
            />
            <Cat
              v-if="species === SPECIES.CAT"
              :size="50"
            />
          </div>
          <FloatingInput
            title="Pet name"
            type="text"
            v-model="pet_name"
            :error="petNameError"
          />
          <div class="d-flex flex-wrap justify-content-between mb-4 gap-3">
            <div class="col">
              <InputSelect
                :list="SPECIES"
                title="Select Species"
                v-model="species"
                :error="speciesError"
              />
            </div>
            <div class="col">
              <InputFile
                v-model="image"
                :error="imageError"
              />
            </div>
          </div>
          <FloatingInput
            title="Reference"
            type="text"
            v-model="reference"
            :error="referenceError"
          />
          <div class="row m-auto w-75">
            <BtnForm
              title="register"
              :isLoading="isLoading"
            />
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { VIEW_TITLE, SPECIES, API_ROUTES_PET, ERROR_SESSION } from "@/constants";
import { Title, FloatingInput, InputSelect, InputFile, Subtitle, BtnForm, ModalQr } from "../index";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { registerPetSchema } from "@/schemas";
import { PawPrint, Dog, Cat } from "@lucide/vue";
import { objToDataForm } from "../../utils";
import { usePet } from "@/composables/index";
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(registerPetSchema),
});
const key = ref<number>(0);
const { value: pet_name, errorMessage: petNameError } = useField<string>("pet_name");
const { value: species, errorMessage: speciesError } = useField<string>("species", undefined, {
  initialValue: SPECIES.DOG,
});
const { value: reference, errorMessage: referenceError } = useField<string>("reference");
const { value: image, errorMessage: imageError } = useField<File | null>("image", undefined, { initialValue: null });

const { registerPet, isLoading, dataQr: dataMedia, cleanValues, errorMessage } = usePet();

const handleForm = handleSubmit(async (values) => {
  const dataForm = objToDataForm(values);
  await registerPet(API_ROUTES_PET.BASE_PETS, dataForm);
  if (dataMedia.value) myModal.value?.show();
});

const handleCloseModal = () => {
  resetForm();
  key.value++;
  myModal.value?.hide();
  cleanValues();
};

const myModal = ref<Modal | null>(null);
onMounted(() => {
  const element = document.querySelector<HTMLElement>(".modal");
  if (element) {
    myModal.value = new Modal(element);
  }
});
</script>

<style scoped>
.form-content {
  min-height: 40rem !important;
  border: 0.3rem solid var(--color-blue);
  border-radius: 0.8rem;
  position: relative;
  z-index: 1;
}

.card-top {
  position: absolute;
  width: 10rem;
  height: 40rem;
  top: -1rem;
  right: 1rem;
  transform: translate(-1rem, -1rem);
  background-color: var(--color-blue);
  border-radius: 0.8rem 0.8rem 0 0;
  z-index: -1;
}

.custom-icon {
  position: absolute;
  right: 2.5rem;
  color: white;
  top: 1rem;
}

main {
  background-image: url("../../assets/images/dashboardRegister.jpg");
}
</style>
