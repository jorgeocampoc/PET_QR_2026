const routesEmail = [
  {
    path: "/verify-email/:token",
    component: () => import("@/pages/VerifyEmailPage.vue"),
    name: "verify-email",
  },
];

export { routesEmail };
