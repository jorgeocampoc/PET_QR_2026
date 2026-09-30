import { activeAccountUser } from "@/services";
import { handleWarningToast } from "@/utils";
import { ref } from "vue";

const useVerifyAccount = () => {
  const isLoading = ref<boolean>(false);
  const msg = ref<string>("");
  const activeUser = async (url: string, token: string): Promise<boolean> => {
    if (isLoading.value) return false;
    try {
      isLoading.value = true;
      const { message } = await activeAccountUser(url, token);
      msg.value = message;
      return true;
    } catch (error) {
      handleWarningToast(error);
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    activeUser,
    msg,
  };
};

export { useVerifyAccount };
