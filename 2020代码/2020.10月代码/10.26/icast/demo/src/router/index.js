import { createRouter, createWebHashHistory } from "vue-router";
import Users from "../components/Users";

const routes = [
  {
    path: "/",
    redirect: "users"
  },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/userinfo/:id",
    component: () => import("../components/UserInfo.vue"),
    props: true
  },
  {
    path: "/rights",
    component: () => import("../components/Rights.vue")
  },
  {
    path: "/goods",
    component: () => import("../components/Goods.vue")
  },
  {
    path: "/orders",
    component: () => import("../components/Orders.vue")
  },
  {
    path: "/settings",
    component: () => import("../components/Settings.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
