import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/TheLogin.vue'),
    beforeEnter: (_, _2, next) => {
      if (store.getters.isAuthenticated) { next({ name: 'Schedules' }); }
      else { next(); }
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
    component: () => import(/* webpackChunkName: "schedules" */ '../views/general/TheSchedule.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/general/TheUser.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/tournament/:id/:module?',
    name: 'Tournament',
    component: () => import(/* webpackChunkName: "tournament" */ '../views/general/TheTournament.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/club/:id',
    name: 'Club',
    component: () => import(/* webpackChunkName: "club" */ '../views/general/TheClub.vue'),
    meta: { requiresAuth: true },
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
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_URL, //BASE tylko dla bezpo??rednich adres??w
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta?.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});
export default router;
