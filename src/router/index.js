import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UnitListView from "../views/UnitListView.vue";
import UnitDetailView from "../views/UnitDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/units",
    name: "unitList",
    component: UnitListView,
  },
  {
    path: "/units/:id",
    name: "unitDetail",
    component: UnitDetailView,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
