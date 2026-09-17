import { ERROR_DEFAULT } from "@/constants";
import type { AuthSchema, LoginResponseSchema } from "@/types";
import axios from "axios";
import { ref } from "vue";

const loginservice = async (form: AuthSchema) => {
  const msg = ref<string>("");
  try {
    const baseUrl = ref(import.meta.env.VITE_API_URL);

    const { data }: { data: LoginResponseSchema } = await axios.post(
      `${baseUrl.value}auth`,
      form,
      {
        withCredentials: true,
      },
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      msg.value = error.response?.data?.message || ERROR_DEFAULT.ERROR_UNKNOWN;
      throw new Error(msg.value);
    }
    throw error;
  }
};

export { loginservice };
