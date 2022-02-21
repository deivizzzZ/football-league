import { createRouter, createWebHashHistory } from "vue-router";
import Games from "../views/Games.vue";

const routes = [
  {
    path: "/",
    name: "Games",
    component: Games
  },
  {
    path: "/table",
    name: "Table",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Table.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
