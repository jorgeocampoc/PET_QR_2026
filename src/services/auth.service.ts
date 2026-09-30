import { ERROR_DEFAULT } from "@/constants";
import type {
  AuthSchema,
  LoginResponseSchema,
  LogoutResponseSchema,
} from "@/types";
import axios from "axios";
import { ref } from "vue";

const baseUrl = ref(import.meta.env.VITE_API_URL);
const msg = ref<string>("");
const loginservice = async (form: AuthSchema) => {
  try {
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

const logoutService = async () => {
  try {
    const { data }: { data: LogoutResponseSchema } = await axios.post(
      `${baseUrl.value}auth/logout`,
      {},
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

export { loginservice, logoutService };
