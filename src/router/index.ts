import LayoutAuth from '@/layouts/auth/LayoutAuth.vue';
import LayoutBoard from '@/layouts/dashboard/LayoutBoard.vue';
import LayoutHome from '@/layouts/home/LayoutHome.vue';
import { defineAuthRoutes } from '@/modules/security/routes/routes';
import { defineUserRoutes } from '@/modules/users/routes/routes';
import SiteHome from '@/views/SiteHome.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutHome,
      children: [
        {
          path: '/',
          component: SiteHome,
          name: 'home'
        }
      ]
    },
    {
      path: '/',
      component: LayoutAuth,
      children: defineAuthRoutes(),
    },
    {
      path: '/management',
      component: LayoutBoard,
      children: defineUserRoutes('/management'),
    }
  ]
});

export default router;
