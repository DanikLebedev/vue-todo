import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/create",
    name: "Create",
    component: () => import('../views/Edit.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.token) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import('../views/Edit.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.token) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../views/TodoList.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.token) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import( "../views/Login.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 Error",
    component: () => import( "../views/404Page.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
