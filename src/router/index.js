import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Ganti dengan komponen halaman utama
import About from '../components/About.vue'; // Ganti dengan komponen halaman lain (misalnya tentang)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // Tambahkan rute lain sesuai kebutuhan
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;