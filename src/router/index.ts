import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

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
  },
  {
    path: '/retrive',
    name: 'Retrive',
    component: () =>import(/* webpackChunkName: "retrive" */ '../views/Retrive.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "retrive" */ '../views/user/User.vue'),
    children: [
      {
        path: '/user',
        component: () =>import(/* webpackChunkName: "Overview" */ '../views/user/UserOverview.vue'),
      },
      {
        path: '/user/userrecent',
        component: () =>import(/* webpackChunkName: "Overview" */ '../views/user/UserRecent.vue'),
      },
    ],
  },
  {
    path: "/tournament/:module?",
    name: "Tournament Info",
    component: () => import(/* webpackChunkName: "tournament" */ '../views/tournament/TheTournament.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
