import { IMAGE_EXT } from "@/constants";
import type { ImageExt } from "@/types";

const getExt = (fileName: string): string => {
  return fileName.split(".").pop() ?? "";
};

const validateExt = (ext: string): boolean => {
  return IMAGE_EXT.includes(ext as ImageExt);
};

export { getExt, validateExt };
