import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import guests from "@/assets/json/data.json";

function resolveGuestName(route: any) {
  const id = Number(route.params.guestId); // Convert route param to a number
  const guest = guests.Guest.find((g) => g.id === id); // Find guest by id
  return guest ? guest.name : "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:guestId?", // guestId as dynamic parameter
      name: "home",
      component: HomeView,
      props: (route) => ({ guestName: resolveGuestName(route) }), // Pass as props
    },
  ],
});

export default router;
