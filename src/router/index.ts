import LayoutAuth from '@/layouts/auth/LayoutAuth.vue';
import LayoutBoard from '@/layouts/dashboard/LayoutBoard.vue';
import LayoutLanding from '@/layouts/landing/LayoutLanding.vue';
import { createRouter, createWebHistory } from 'vue-router'
import './utils';
import { loadedRoutes, loadRoutes } from './utils';

loadRoutes();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: LayoutLanding,
    },
    {
      path: '/',
      component: LayoutAuth,
      children: loadedRoutes['/'],
    },
    {
      path: '/dashboard',
      component: LayoutBoard,
      children: loadedRoutes['dashboard'],
    }
  ]
});

export default router;
