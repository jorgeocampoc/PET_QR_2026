const routesNotFoundPage = [
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/NotFoundPage.vue"),
  },
];

export default routesNotFoundPage;
