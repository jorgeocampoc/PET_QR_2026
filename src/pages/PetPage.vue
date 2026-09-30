<template>
  <main class="custom-main">
    <section
      class="card-custom d-flex flex-column position-relative justify-content-around"
      v-if="!isLoading"
    >
      <header class="custom-header position-relative">
        <img
          :src="petData?.img_url"
          alt=""
          class="custom-img img-thumbnail shadow"
        />
      </header>
      <header class="custom-header-bottom"></header>
      <section>
        <h3 class="text-center text-uppercase pb-5 fw-medium fs-2">{{ petData?.pet_name }}</h3>
        <h3 class="text-center text-uppercase">Species</h3>
        <p class="text-center fs-6">{{ petData?.species }}</p>
        <h5 class="text-center text-uppercase">Reference:</h5>
        <p class="text-center fs-6">{{ petData?.reference }}</p>
        <div class="d-flex justify-content-center align-items-center flex-column">
          <Cat
            v-if="petData?.species == SPECIES.CAT"
            :size="50"
            class="text-color-orange"
          />
          <Dog
            v-if="petData?.species == SPECIES.DOG"
            :size="50"
            class="text-color-orange"
          />
          <div class="w-25 m-auto my-3">
            <button
              class="btn btn-outline-dark"
              @click="goToPage"
            >
              Go to page
            </button>
          </div>
        </div>
      </section>
      <FormFooter />
    </section>
    <section
      class="card-custom"
      v-else
    >
      <BPlaceholder
        animation="glow"
        cols="12"
        class="h-100"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import FormFooter from "@/components/common/FormFooter.vue";
import { usePet } from "@/composables";
import { API_ROUTES_PET, SPECIES } from "@/constants";
import { getStringParams } from "@/utils";
import { Cat, Dog } from "@lucide/vue";
import { BPlaceholder } from "bootstrap-vue-next";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const id = ref<string | null>("");
const { getPet, petData, isLoading } = usePet();
onMounted(async () => {
  id.value = getStringParams(route.params.id);
  if (!id.value) return;
  await getPet(API_ROUTES_PET.BASE_PETS, id.value);
});
const router = useRouter();
const goToPage = () => {
  router.push("/auth");
};
</script>

<style scoped>
.custom-main {
  height: 100dvh;
  width: 100dvw;
  background: url("../assets/images/fondoPet.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
}

.card-custom {
  height: 45rem;
  width: 30rem;
  background-color: white !important;
  flex: 0 0 auto;
  border-radius: 1rem !important;
  border: 3px solid white;
}

.custom-header {
  height: 25% !important;
  background: url("../assets/images/fondo.jpg");
  flex: 0 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem 1rem 0 0 !important;
}
.custom-header-bottom {
  height: 15% !important;
  flex: 0 0 auto;
  border-radius: 3px;
  background-color: white;
}
.custom-img {
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
}
</style>
