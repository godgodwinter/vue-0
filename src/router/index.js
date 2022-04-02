import { createRouter, createWebHistory } from 'vue-router';
// layouts
import LandingLayout from '@/layouts/LandingLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
// pages
import NotFound from '@/views/NotFound.vue';
import LandingIndex from '@/views/landing/LandingIndex.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
import Tapel from '@/views/admin/tapel/TapelIndex.vue';
import Kelas from '@/views/admin/kelas/KelasIndex.vue';

const routes = [
  {
    path: '/LandingLayout',
    name: 'Landing',
    component: LandingLayout,
    redirect: '/',
    children: [
      {
        path: '/', // halaman utama dan login
        name: 'LandingIndex',
        component: LandingIndex,
      },
      {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
      },
    ],
  },
  {
    path: '/AdminLayout',
    name: 'Admin2',
    component: AdminLayout,
    redirect: '/',
    children: [
      {
        path: '/dashboard', // halaman admin
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/tapel', // halaman admin
        name: 'Tapel',
        component: Tapel,
      },
      {
        path: '/kelas', // halaman admin
        name: 'Kelas',
        component: Kelas,
      },
    ],
  },
  {
    path: '/:catchAll(.*)', redirect: '/404',
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
