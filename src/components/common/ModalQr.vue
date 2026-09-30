<template>
  <div
    class="modal"
    tabindex="-1"
    id="modal-media"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered animate__animated"
      :class="{
        animate__fadeIn: !animationClose,
        animate__fadeOutUp: animationClose,
      }"
    >
      <div class="modal-content bg-color-orange border-light">
        <div class="modal-body">
          <header class="position-relative">
            <Download
              class="custom-abs-icon-download"
              :class="{ 'icon-disabled': isLoading }"
              @click="!isLoading && downloadMedia()"
            />
            <H5 :title="typeMedia == 'qr' ? 'Scan the code qr' : 'pet photo'" />
          </header>
          <section
            class="qr-content d-flex justify-content-center"
            ref="qrSection"
          >
            <qrcode-vue
              v-if="typeMedia == 'qr' && dataMedia"
              :value="dataMedia"
              level="H"
              :margin="1"
              :size="250"
            />
            <img
              v-if="typeMedia == 'image' && dataMedia"
              :src="dataMedia"
              class="qr-code img-thumbnail animate__animated animate__fadeIn object-fit-cover"
              :width="250"
              :height="250"
            />
          </section>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button
            @click="handleModal"
            class="btn btn-outline-light px-4 text-uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { H5 } from "./../index";
import { ref, watch } from "vue";
import { Download } from "@lucide/vue";
import { downloadImage, downloadQr } from "@/utils";
const qrSection = ref<HTMLElement | null>(null);
const props = defineProps<{
  dataMedia: string;
  typeMedia: string;
  animationClose?: boolean;
}>();
const emit = defineEmits(["closeModal"]);
const handleModal = () => {
  emit("closeModal");
};

const isLoading = ref<boolean>(false);

const downloadMedia = async () => {
  isLoading.value = true;
  if (!props.typeMedia) {
    isLoading.value = false;
    return;
  }
  switch (props.typeMedia) {
    case "image":
      await downloadImage(props.dataMedia);
      break;
    case "qr":
      const canvas = qrSection.value?.querySelector("canvas");
      if (!(canvas instanceof HTMLCanvasElement)) return;
      downloadQr(canvas);
      break;

    default:
      break;
  }
  isLoading.value = false;
};
</script>

<style scoped>
.qr-content {
  text-align: center;
  padding: 2rem;
}
.qr-code {
  background-color: white;
  border-radius: 1rem;
}

.custom-abs-icon-download {
  position: absolute;
  right: 1rem;
  top: 0;
  color: white;
  cursor: pointer;
}

.icon-disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
