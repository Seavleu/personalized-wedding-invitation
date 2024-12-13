import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:guestId?", 
      name: "home",
      component: HomeView,
      props: (route) => ({ guestId: route.params.guestId }),  
    },
  ],
});

export default router;
