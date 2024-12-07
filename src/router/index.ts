import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:guestName?", // Dynamic route with optional guestName parameter
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
