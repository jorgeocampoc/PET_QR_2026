import { API_ROUTES_USER, ERROR_DEFAULT } from "@/constants";
import type { ApiRoutesUser, RegisterUserSchema, UserSchema } from "@/types";
import axios from "axios";
import { ref } from "vue";

const msg = ref<string>("");
const baseUrl = import.meta.env.VITE_API_URL;

const serviceGetUser = async () => {
  try {
    const data = await axios.get(`${baseUrl}${API_ROUTES_USER.GET_USER}`, { withCredentials: true });

    return data.data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      msg.value = error.response?.data?.message || ERROR_DEFAULT.ERROR_UNKNOWN;
      throw new Error(msg.value);
    }
    throw error;
  } finally {
    msg.value = "";
  }
};
const createUser = async (url: ApiRoutesUser, registerUserSchema: RegisterUserSchema) => {
  try {
    const { data } = await axios.post(`${baseUrl}${url}`, registerUserSchema, { withCredentials: true });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      msg.value = error.response?.data?.message || ERROR_DEFAULT.ERROR_UNKNOWN;
      throw new Error(msg.value);
    }
    throw error;
  } finally {
    msg.value = "";
  }
};

export { serviceGetUser, createUser };
