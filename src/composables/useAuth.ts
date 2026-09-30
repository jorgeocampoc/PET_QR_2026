import { AUTH_ROUTES } from "@/constants";
import { loginservice, logoutService } from "@/services";
import type { AuthSchema } from "@/types";
import { errorToast, successToast } from "@/utils";
import { ref } from "vue";
import { useRouter } from "vue-router";

const useAuth = () => {
  const isLoading = ref<boolean>(false);
  const router = useRouter();
  const login = async (data: AuthSchema) => {
    try {
      isLoading.value = true;
      const result = await loginservice(data);
      successToast(result.message);
      router.push({ path: result.path });
    } catch (error) {
      if (error instanceof Error) {
        errorToast(error.message);
      }
    } finally {
      isLoading.value = false;
    }
  };
  const logout = async () => {
    try {
      isLoading.value = true;
      const result = await logoutService();
      successToast(result.message);
      router.push(AUTH_ROUTES.auth);
    } catch (error) {
      if (error instanceof Error) {
        errorToast(error.message);
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    login,
    logout,
  };
};

export { useAuth };
