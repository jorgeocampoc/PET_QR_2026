import { API_ROUTES_USER, ERROR_DEFAULT } from "@/constants";
import type { UserSchema } from "@/types";
import axios from "axios";
import { ref } from "vue";

const serviceGetUser = async () => {
  const msg = ref<string>("");
  try {
    const baseUrl = ref(import.meta.env.VITE_API_URL);
    const data = await axios.get(
      `${baseUrl.value}${API_ROUTES_USER.GET_USER}`,
      { withCredentials: true },
    );
    
    return data.data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      msg.value = error.response?.data?.message || ERROR_DEFAULT.ERROR_UNKNOWN;
      throw new Error(msg.value);
    }
    throw error;
  }
};

export { serviceGetUser };
