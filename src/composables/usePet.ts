import { deletById, getAllPetsByUSer, getPetById, serviceRegisterPet, serviceUpdatePet } from "@/services/index";
import type { ApiRoutesPet, PaginationmailSchema, UpdatePetSchema } from "@/types";
import type { PetSchema } from "@/types/index";
import { handleErrorToast, successToast } from "@/utils";
import { ref } from "vue";
import { useRouter } from "vue-router";

const usePet = () => {
  const router = useRouter();
  const isLoading = ref<boolean>(false);
  const dataQr = ref<string>("");
  const errorMessage = ref<string>("");
  const data = ref<PetSchema[]>([]);
  const petData = ref<PetSchema | null>(null);
  const dataPagination = ref<PaginationmailSchema | null>(null);
  const registerPet = async (url: ApiRoutesPet, formData: FormData) => {
    if (isLoading.value) return;
    try {
      isLoading.value = true;
      const { message, result } = await serviceRegisterPet(url, formData);
      successToast(message);
      dataQr.value = result;
    } catch (error) {
      handleErrorToast(error, router);
    } finally {
      isLoading.value = false;
    }
  };
  const listPetsByUser = async (url: ApiRoutesPet, page: number) => {
    if (isLoading.value) return;
    try {
      isLoading.value = true;
      const { results, pagination } = await getAllPetsByUSer(url, page);
      dataPagination.value = pagination;
      data.value = results;
      console.log(data.value, "fsfsfsa");
    } catch (error) {
      handleErrorToast(error, router);
    } finally {
      isLoading.value = false;
    }
  };

  const deletPet = async (url: ApiRoutesPet, id: string) => {
    if (isLoading.value) return;
    try {
      isLoading.value = true;
      const { message } = await deletById(url, id);
      successToast(message);
    } catch (error) {
      handleErrorToast(error, router);
    } finally {
      isLoading.value = false;
    }
  };
  const getPet = async (url: ApiRoutesPet, id: string) => {
    if (isLoading.value) return;
    try {
      isLoading.value = true;
      const { pet } = await getPetById(url, id);
      petData.value = pet;
    } catch (error) {
      handleErrorToast(error, router);
      router.push("/auth");
    } finally {
      isLoading.value = false;
    }
  };
  const updatePet = async (url: ApiRoutesPet, updatePetSchema: UpdatePetSchema): Promise<boolean> => {
    if (isLoading.value) return false;
    try {
      isLoading.value = true;
      const { message } = await serviceUpdatePet(url, updatePetSchema);
      successToast(message);
      return true;
    } catch (error) {
      handleErrorToast(error, router);
      router.push("/auth");
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const cleanValues = () => {
    dataQr.value = "";
    errorMessage.value = "";
    data.value = [];
  };
  return {
    isLoading,
    cleanValues,
    registerPet,
    dataQr,
    errorMessage,
    listPetsByUser,
    data,
    dataPagination,
    deletPet,
    getPet,
    petData,
    updatePet,
  };
};

export { usePet };
