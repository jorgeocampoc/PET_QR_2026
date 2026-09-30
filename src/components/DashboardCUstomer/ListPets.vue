<template>
  <main class="d-flex flex-column h-100 flex-grow-1 border-blue-view custom-image-background">
    <Title :title="VIEW_TITLE.petsList" />
    <div class="container flex-fill table-responsive">
      <table
        class="table mb-0 shadow animate__animated animate__fadeIn table-hover"
        :key="`table-pets-customer-${currentPage}`"
      >
        <TableHead :data="columTable" />
        <tbody
          class="table-group-divider"
          v-if="!isLoading"
        >
          <tr v-for="value in data">
            <td class="table-body-td-custom">{{ value?.pet_name }}</td>
            <td class="table-body-td-custom">{{ value?.species }}</td>
            <td class="table-body-td-custom">{{ value?.reference }}</td>
            <td class="table-body-td-custom">
              <Images
                class="text-color-blue icon-hover-orange"
                @click="showModal('image', value?.img_url)"
              />
            </td>
            <td class="table-body-td-custom">
              <ScanQrCode
                class="text-color-blue icon-hover-orange"
                @click="showModal('qr', value?.qr_code)"
              />
            </td>
            <td class="d-flex justify-content-center align-items-center gap-2">
              <SquarePen
                :size="20"
                class="text-color-blue icon-hover-orange"
                aria-controls="offcanvas-locations"
                :aria-expanded="show ? 'true' : 'false'"
                @click="handleCanvas(value)"
              />
              <Trash
                :size="20"
                class="text-danger icon-hover-orange"
                @click="handleDelete(value.id)"
              />
            </td>
          </tr>
        </tbody>
        <PlaceholderTBody
          :total="columTable.length"
          v-else
        />
      </table>
      <MsgEmptyResultTable
        :title="DATA_EMPTY"
        v-if="!isLoading && data.length == 0"
      />
      <div class="d-flex justify-content-center align-items-center flex-wrap max-w-50">
        <Pagination
          :pagination="dataPagination"
          :is-loading="isLoading"
          @update-page="handleUpdatePage"
        />
      </div>
    </div>
    <ModalQr
      :data-media="dataMedia"
      @closeModal="handleCloseModal"
      :type-media="typeMedia"
      :animation-close="animationClose"
    />
    <ModalApproved
      @closeModal="handleCloseModal"
      :animation-close="animationClose"
      :is-loading="isLoading"
    />
    <OffCanvasEditPet
      :placement="placement"
      v-model="show"
      :pet="currentPet"
      @update="handleUpdate"
    />
  </main>
</template>

<script setup lang="ts">
import { usePet } from "@/composables";
import {
  Title,
  PlaceholderTBody,
  MsgEmptyResultTable,
  Pagination,
  TableHead,
  ModalQr,
  ModalApproved,
  OffCanvasEditPet,
} from "../index";
import { API_ROUTES_PET, DATA_EMPTY, PLACEMENT, VIEW_TITLE } from "@/constants";
import { onMounted, provide, ref } from "vue";
import { Trash, SquarePen, Images, ScanQrCode } from "@lucide/vue";
import { Modal } from "bootstrap";
import type { PetSchema, PlacementCanvas } from "@/types";
const columTable = ref(["Pet name", "species", "reference", "Image", "QR", "Edit"]);
const { isLoading, listPetsByUser, data, dataPagination, deletPet } = usePet();
const currentPage = ref<number>(1);
const dataMedia = ref<string>("");
const typeMedia = ref<string>("");
const animationClose = ref<boolean>(false);
const modalMedia = ref<Modal | null>(null);
const show = ref<boolean>(false);
const modalApprovedAction = ref<Modal | null>(null);
const placement = ref<PlacementCanvas>(PLACEMENT.end);
const currentPet = ref<PetSchema | null>(null);
onMounted(async () => {
  await listPetsByUser(API_ROUTES_PET.BASE_PETS, currentPage.value);
  const element = document.querySelector<HTMLElement>("#modal-media");
  const elementApproved = document.querySelector<HTMLElement>("#modal-approved-action");
  if (element) modalMedia.value = new Modal(element);
  if (elementApproved) modalApprovedAction.value = new Modal(elementApproved);
});

provide("pagination", {
  currentPage,
});

const showModal = (type: string, data: string) => {
  dataMedia.value = data;
  typeMedia.value = type;
  modalMedia.value?.show();
};

const handleUpdatePage = async () => {
  await listPetsByUser(API_ROUTES_PET.BASE_PETS, currentPage.value);
};
const idPet = ref<string>("");
const handleCloseModal = async (act: string) => {
  if (act && act == "delete") {
    await deletPet(API_ROUTES_PET.BASE_PETS, idPet.value);
    await listPetsByUser(API_ROUTES_PET.BASE_PETS, currentPage.value);
  }

  animationClose.value = true;
  setTimeout(() => {
    animationClose.value = false;
    dataMedia.value = "";
    idPet.value = "";
    modalApprovedAction.value?.hide();
    modalMedia.value?.hide();
  }, 500);
};

const handleDelete = (id: string) => {
  if (!id) return;
  idPet.value = id;
  modalApprovedAction.value?.show();
};

const handleCanvas = (pet: PetSchema) => {
  show.value = !show.value;
  currentPet.value = pet;
};

const handleUpdate = async () => {
  await listPetsByUser(API_ROUTES_PET.BASE_PETS, currentPage.value);
};
</script>

<style scoped>
main {
  background: url("../../assets/images/dashboardList.jpg");
}
</style>
