import { IMAGE_EXT } from "@/constants";
import type { ImageExt } from "@/types";

const downloadImage = async (file: string) => {
  if (!file) return;
  try {
    const resposne = await fetch(file);
    const blob = await resposne.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const ext = file.split(".").pop();
    if (!IMAGE_EXT.includes(ext as ImageExt)) return;
    link.download = `pet-qr-image.${ext}`;
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch (error) {
    throw new Error("Erroe to donwload the image");
  }
};

const downloadQr = (canvas: HTMLCanvasElement) => {
  if (!(canvas instanceof HTMLCanvasElement)) return;
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pet-qr.png";
    link.click();
    URL.revokeObjectURL(url);
    link.remove();
  }, "image/png");
};

export { downloadImage, downloadQr };
