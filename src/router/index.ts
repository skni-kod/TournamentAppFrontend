import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/TheLogin.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        next();
      } else {
        next({ name: 'Home' });
      }
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/TheHome.vue'),
    meta: { stickyNavbar: true },
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: () => import(/* webpackChunkName: "games_clubs" */ '../views/general/TheSchedule.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/general/TheUser.vue'),
  },
  {
    path: '/tournament/:id/:module?',
    name: 'Tournament',
    component: () => import(/* webpackChunkName: "tournament" */ '../views/general/TheTournament.vue'),
  },
  {
    path: '/club/:id',
    name: 'Club',
    component: () => import(/* webpackChunkName: "club" */ '../views/general/TheClub.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/basic/TheFAQ.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () =>
      import(/* webpackChunkName: "privacy-policy" */ '../views/basic/PrivacyPolicy.vue'),
  },
  {
    path: '/skni',
    name: 'SKNI',
    beforeEnter() {
      window.open('https://kod.prz.edu.pl/#/', '_blank');
    },
  },
  {
    path: '/retrive',
    name: 'Retrive',
    component: () =>
      import(/* webpackChunkName: "retrive" */ '../views/login/TheRetrive.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
