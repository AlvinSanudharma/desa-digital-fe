import Auth from "@/layouts/Auth.vue";
import Main from "@/layouts/Main.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
          meta: {
            requiresAuth: true,
            permissions: "dashboard-menu",
          },
        },
      ],
    },
    {
      path: "/login",
      component: Auth,
      children: [
        {
          path: "",
          name: "login",
          component: Login,
          meta: {
            requiresUnAuth: true,
          },
        },
      ],
    },
  ],
});

export default router;
