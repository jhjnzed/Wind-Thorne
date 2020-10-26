// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home";
import Music from "../components/music";

import org from "../components/org";
import qixia from "../components/qixia";

/// 2.定义路由(routes)
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/Music",
    component: Music,
    children: [
      {
        path: "/org/:id",
        component: org
      },
      {
        path: "/qixia",
        component: qixia
      }
    ]
  }
];

// 3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});

// 4.导出路由
export default router;

