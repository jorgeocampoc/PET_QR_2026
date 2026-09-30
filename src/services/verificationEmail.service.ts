import { ERROR_DEFAULT } from "@/constants";
import axios from "axios";
import { ref } from "vue";
const msg = ref<string>("");
const baseUrl = import.meta.env.VITE_API_URL;
const activeAccountUser = async (url: string, token: string) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}/${token}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      msg.value = error.response?.data?.message || ERROR_DEFAULT.ERROR_UNKNOWN;
      throw new Error(msg.value);
    }
    throw error;
  } finally {
    msg.value = "";
  }
};

export { activeAccountUser };
