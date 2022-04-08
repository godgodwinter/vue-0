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
import Mapel from '@/views/admin/mapel/Index.vue';
import Siswa from '@/views/admin/siswa/Index.vue';
import BankSoal from '@/views/admin/bank/Index.vue';
import BankSoalDetail from '@/views/admin/bank/Detail.vue';
import BankSoalCreateSoal from '@/views/admin/bank/CreateSoal.vue';

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
      {
        path: '/mapel', // halaman admin
        name: 'Mapel',
        component: Mapel,
      },
      {
        path: '/siswa', // halaman admin
        name: 'Siswa',
        component: Siswa,
      },
      {
        path: '/banksoal', // halaman banksoal
        name: 'BankSoal',
        component: BankSoal,
      },
      {
        path: '/banksoal/:id', // halaman admin
        name: 'BankSoalDetail',
        component: BankSoalDetail,
      },
      {
        path: '/banksoalcreate/:id', // halaman admin
        name: 'BankSoalCreateSoal',
        component: BankSoalCreateSoal,
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
