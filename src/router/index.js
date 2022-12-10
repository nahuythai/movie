import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Auth from "../pages/Auth.vue";
import { beforeEachGuard } from "./before-each-guard";

const routes = [
  { path: "/auth", component: Auth, name: "Auth" },
  { path: "/", component: Home, name: "Home" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

beforeEachGuard(router);
