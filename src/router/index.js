import * as vueRouter from "vue-router";
import Top from "../components/pages/Top.vue";
import Menu from "../components/pages/Menu.vue";
import Recruit from "../components/pages/Recruit.vue";
import AdminLogin from "../components/pages/Admin/Login.vue";
import AdminTop from "../components/pages/Admin/AdminTop.vue";
import AdminRecruit from "../components/pages/Admin/AdminRecruit.vue";


const routes = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/recruit",
    component: Recruit,
  },
  {
    path: "/admin/login",
    component: AdminLogin,
  },
  {
    path: "/admin/top",
    component: AdminTop,
  },
  {
    path: "/admin/recruit",
    component: AdminRecruit,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;