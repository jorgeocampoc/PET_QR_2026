import { createUser } from "@/services";
import type { ApiRoutesUser, RegisterUserSchema } from "@/types";
import { handleErrorSesionToast, successToast } from "@/utils";
import { ref } from "vue";

const useUser = () => {
  const isLoading = ref<boolean>(false);
  const registerUser = async (url: ApiRoutesUser, registerUserSchema: RegisterUserSchema): Promise<boolean> => {
    if (isLoading.value) return false;
    try {
      isLoading.value = true;
      const { message } = await createUser(url, registerUserSchema);
      successToast(message);
      return true;
    } catch (error) {
      handleErrorSesionToast(error);
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return { registerUser, isLoading };
};

export { useUser };
