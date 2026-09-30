import { ERROR_DEFAULT } from "@/constants";
import type { ApiRoutesPet, PetSchema, UpdatePetSchema } from "@/types";
import { handleAxiosError } from "@/utils";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

const serviceRegisterPet = async (url: ApiRoutesPet, formData: FormData) => {
  try {
    const { data } = await axios.post(`${baseUrl}${url}`, formData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};
const getAllPetsByUSer = async (url: ApiRoutesPet, page: number) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}?page=${page}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const deletById = async (url: ApiRoutesPet, id: string) => {
  try {
    const { data } = await axios.delete(`${baseUrl}${url}/${id}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getPetById = async (url: ApiRoutesPet, id: string) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}/${id}`);
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};
const serviceUpdatePet = async (url: ApiRoutesPet, pet: UpdatePetSchema) => {
  try {
    const { data } = await axios.put(`${baseUrl}${url}`, pet, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { serviceRegisterPet, getAllPetsByUSer, deletById, getPetById, serviceUpdatePet };
