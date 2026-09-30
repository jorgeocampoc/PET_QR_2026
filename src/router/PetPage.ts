const routesPet = [
  {
    path: "/pet/:id",
    component: () => import("@/pages/PetPage.vue"),
    name: "pet-info",
  },
];

export { routesPet };
