import { createRouter, createWebHistory } from 'vue-router';
// layouts
import LandingLayout from '/src/layouts/LandingLayout.vue';
import AdminLayout from '/src/layouts/AdminLayout.vue';
// pages
import NotFound from '/src/views/NotFound.vue';
import LandingIndex from '/src/views/landing/LandingIndex.vue';
import Dashboard from '/src/views/admin/Dashboard.vue';

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
              path: '/dashboard',  //halaman admin
              name: 'Dashboard',
              component: Dashboard,
            },
  ]
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
