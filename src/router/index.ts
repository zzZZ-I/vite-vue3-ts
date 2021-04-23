import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../pages/details/index.vue"),
    meta: {
      title: "详情页"
    }
  }
];
const router = createRouter({
  history: createWebHistory("/base"),
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title as string;
  next();
});

export default router;
