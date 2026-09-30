<template>
  <main
    class="vh-100 bg-color-blue d-flex justify-content-center align-items-center flex-grow-1"
    v-if="!isLoading && band"
  >
    <section class="section-card d-flex justify-content-center align-items-center">
      <div class="custom-content-card">
        <div class="custom-icon">
          <CircleCheck />
        </div>
        <h5 class="custom-title-card">Email verification</h5>
        <p class="text-secondary">{{ msg }}</p>
        <button
          class="btn btn-outline-success"
          @click="router.push('/auth')"
        >
          Go to Login
        </button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useVerifyAccount } from "@/composables";
import { API_ROUTES_ACCOUNT } from "@/constants";
import { getStringParams } from "@/utils";
import { CircleCheck } from "@lucide/vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const token = ref<string | null>(null);
const band = ref<boolean>(false);
const { activeUser, msg, isLoading } = useVerifyAccount();
onMounted(async () => {
  token.value = getStringParams(route.params.token);
  if (!token.value) return;
  band.value = await activeUser(API_ROUTES_ACCOUNT.BASE_ACCOUNT, token.value);
  if (!band.value) {
    router.push("/auth");
  }
});
</script>

<style scoped>
.section-card {
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 1rem;
  flex: 0 0 auto;
}

.custom-icon svg {
  width: 9rem !important;
  height: 9rem !important;
  color: var(--bs-success);
  text-align: center;
}

.custom-content-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-title-card {
  color: var(--color-blue);
  padding: 1rem 0 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
}
</style>
