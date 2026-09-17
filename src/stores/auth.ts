import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { serviceGetUser } from "@/services";

interface User {
  email: string;
  role: string;
}

export const useAuthStore = defineStore("counter", () => {
  const isAuthenticated = ref<boolean>(false);
  const user = reactive<User>({
    email: "",
    role: "",
  });
  const getUser = async () => {
    try {
      const userFound = await serviceGetUser();

      if (userFound) {
        isAuthenticated.value = true;
        user.email = userFound.email;
        user.role = userFound.role;
      }
    } catch (error) {
      console.log(error);
      isAuthenticated.value = false;
      user.email = "";
      user.role = "";
    } 
  };

  return {
    getUser,
    isAuthenticated,
    user,
  };
});
