import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        next();
      } else {
        next({ name: 'Home' });
      }
    }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "retrive" */ '../views/TheUser.vue'),
  },
  {
    path: "/tournament/:id/:module?",
    name: "Tournament Info",
    component: () => import(/* webpackChunkName: "tournament" */ '../views/TheTournament.vue'),
  },
  {
    path: "/retrive",
    name: "Retrive",
    component: () => import(/* webpackChunkName: "retrive" */ '../views/Retrive.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
