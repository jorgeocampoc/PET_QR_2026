<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-color-blue shadow p-3">
    <div class="container-fluid">
      <a
        class="navbar-brand d-flex align-items-center gap-2"
        href="#"
        v-if="!isLoading"
      >
        <img
          src="../../assets//images/logo.jpg"
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCZ8mvie0EEJPuMzC5_VDy8oyR8bQOtGAjnDwZVoqWg&s=10"
          width="30"
          height="35"
          class="rounded-circle"
        />
        <span class="custom-name">
          {{ SYSTEM_NAME }}
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li
            class="nav-item mx-3"
            v-for="(item, key, index) in items"
            :key="index"
          >
            <a
              :class="{
                active: currentIndexItem == index,
                'custom-hover': currentIndexItem !== index,
              }"
              class="nav-link"
              @click="handleItem(item, index)"
              >{{ item }}</a
            >
          </li>
        </ul>
        <div class="d-flex gap-3 align-items-center">
          <span class="custom-email">{{ user.email }}</span>
          <div class="btn-group">
            <LogOut
              class="custom-hover dropdown-toggle text-light"
              @click="handleLogout"
              id="dropdownLogout"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  class="dropdown-item"
                  @click="btnActionLogout(OPTION_DROP_DOWN_LOGOUT.logout)"
                  >Log Out</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  @click="btnActionLogout(OPTION_DROP_DOWN_LOGOUT.cancel)"
                  >Cancel</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { OPTION_DROP_DOWN_LOGOUT, SYSTEM_NAME } from "@/constants";
import { useAuthStore } from "@/stores/auth";
import type { ItemsAdmin, ItemsCustomer, OptionDropDownLogout } from "@/types";
import { onMounted, ref } from "vue";
import { LogOut } from "@lucide/vue";
import { useAuth } from "@/composables/index";
import { Dropdown } from "bootstrap";
defineProps<{
  items?: ItemsAdmin | ItemsCustomer;
}>();

const currentIndexItem = ref<number>(0);

const emit = defineEmits(["currentItem"]);
const handleItem = (item: string, index: number) => {
  currentIndexItem.value = index;
  emit("currentItem", item);
};

const { user, isLoading } = useAuthStore();
const { logout } = useAuth();
const handleLogout = () => {
  dropdown.value?.show();
};
const dropdown = ref<Dropdown | null>(null);
onMounted(() => {
  const element = document.querySelector<HTMLElement>(".dropdown-toggle");
  if (element) {
    dropdown.value = new Dropdown(element);
  }
});

const btnActionLogout = async (act: OptionDropDownLogout) => {
  switch (act) {
    case OPTION_DROP_DOWN_LOGOUT.logout:
      dropdown.value?.hide();
      await logout();
      break;
    case OPTION_DROP_DOWN_LOGOUT.cancel:
      dropdown.value?.hide();
      break;

    default:
      break;
  }
};
</script>

<style scoped>
.custom-name {
  font-size: 1.5rem;
  color: white !important;
  text-transform: uppercase;
}

.active {
  list-style: inside;
  text-decoration: underline;
  text-decoration-thickness: 5px;
  text-underline-offset: 7px;
  text-decoration-color: var(--color-orange);
  transition: all 0.3s ease;
}

.nav-link {
  font-size: 1.3rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  color: white !important;
}

.custom-email {
  color: white !important;
}

nav {
  border-left: 5px solid var(--color-orange);
  border-right: 5px solid var(--color-orange);
}

.custom-hover:hover {
  color: var(--color-orange) !important;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: var(--color-orange);
  color: white;
  cursor: pointer;
}
</style>
