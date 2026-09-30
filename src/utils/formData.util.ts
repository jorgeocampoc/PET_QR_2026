import type { RegisterPetSchema } from "@/types";

const objToDataForm = (data: RegisterPetSchema): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value as string);
  });
  return formData;
};

export { objToDataForm };
