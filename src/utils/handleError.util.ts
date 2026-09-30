import { ERROR_DEFAULT, ERROR_SESSION } from "@/constants";
import axios from "axios";
import { errorToast, warningToast } from "./toast.util";
import type { ErrorSession } from "@/types";
import type { Router } from "vue-router";

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || ERROR_DEFAULT.ERROR_UNKNOWN;
    throw new Error(message);
  }

  throw error;
};
const handleErrorToast = (error: unknown, router: Router) => {
  if (error instanceof Error) {
    const errorMessage = error.message;
    errorToast(errorMessage);
    if (ERROR_SESSION.includes(errorMessage as ErrorSession)) {
      return router.push("/auth");
    }
  }
};
const handleWarningToast = (error: unknown) => {
  if (error instanceof Error) {
    const errorMessage = error.message;
    warningToast(errorMessage);
  }
};
const handleErrorSesionToast = (error: unknown) => {
  if (error instanceof Error) {
    const errorMessage = error.message;
    errorToast(errorMessage);
  }
};

export { handleAxiosError, handleErrorToast, handleErrorSesionToast, handleWarningToast };
