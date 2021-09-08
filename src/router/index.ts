import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        next();
      } else {
        next({ name: 'Home' });
      }
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/TheUser.vue'),
  },
  {
    path: "/tournament/:id/:module?",
    name: "Tournament Info",
    component: () => import(/* webpackChunkName: "tournament" */ '../views/TheTournament.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/PrivacyPolicy.vue'),
  },
  {
    path: '/skni',
    name: 'SKNI',
    beforeEnter() {
      window.open('https://kod.prz.edu.pl/#/', '_blank');
    }
  },
  {
    path: "/retrive",
    name: "Retrive",
    component: () => import(/* webpackChunkName: "retrive" */ '../views/Retrive.vue'),
  },
  {
    path:"/faq",
    name:"FAQ", 
    component:()=>import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
