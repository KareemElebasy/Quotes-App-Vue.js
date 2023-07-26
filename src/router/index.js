import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllQuates from "../views/AllQuates.vue";
// import SingleQuate from "../views/SingleQuate.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/all",
    name: "allQuates",
    component: AllQuates,
  },
  // {
  //   path: "/quate/:text",
  //   name: "SingleQuate",
  //   component: SingleQuate,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
