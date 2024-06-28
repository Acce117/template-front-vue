import { routes as siteRoutes } from '@/modules/site/routes/routes';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...siteRoutes
  ]
});

export default router;
