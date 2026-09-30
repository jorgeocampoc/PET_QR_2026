import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { serviceGetUser } from "@/services";
import type { UserSchema } from "@/types";
import { INITIAL_USER } from "@/constants";

export const useAuthStore = defineStore("user", () => {
  const isAuthenticated = ref<boolean>(false);
  const isLoading = ref<boolean>(false);

  const user = reactive<UserSchema>({ ...INITIAL_USER });
  const getUser = async () => {
    try {
      isLoading.value = true;
      const userFound = await serviceGetUser();
      if (userFound) {
        Object.assign(user, userFound);
        isAuthenticated.value = true;
      }
    } catch (error) {
      Object.assign(user, INITIAL_USER);
      isAuthenticated.value = false;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    getUser,
    isAuthenticated,
    user,
    isLoading,
  };
});
