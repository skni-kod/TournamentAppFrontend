import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: "/retrive",
    name: "Retrive",
    component: () => import(/* webpackChunkName: "retrive" */ '../views/Retrive.vue'),
  },
  {
    path: "/tournamentInfo",
    name: "Tournament Info",
    component: () => import(/* webpackChunkName: "retrive" */ '../views/TournamentInfo.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
