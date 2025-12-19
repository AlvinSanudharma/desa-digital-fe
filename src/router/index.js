import Auth from "@/layouts/Auth.vue";
import Main from "@/layouts/Main.vue";
import { useAuthStore } from "@/stores/auth";
import Dashboard from "@/views/Dashboard.vue";
import HeadOfFamilies from "@/views/head-of-family/HeadOfFamilies.vue";
import Login from "@/views/Login.vue";
import Cookies from "js-cookie";
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
        {
          path: "head-of-family",
          name: "head-of-family",
          component: HeadOfFamilies,
          meta: {
            requiresAuth: true,
            permissions: "head-of-family-list",
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

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth) {
    if (Cookies.get("token")) {
      try {
        if (!authStore.user) {
          await authStore.checkAuth();
        }

        const userPermissions = authStore.user?.permissions || [];

        if (
          to.meta.permissions &&
          !userPermissions.includes(to.meta.permissions)
        ) {
          next({ name: "Error 403" });

          return;
        }

        next();
      } catch (error) {
        next({ name: "login" });
      }
    } else {
      next({ name: "login" });
    }
  } else if (to.meta.requiresUnAuth && authStore.token) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
