import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import MenuPage from '@/components/MenuPage.vue';
import CartPage from '@/components/CartPage.vue';
import AdminPage from '@/components/AdminPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/menu', name: 'Menu', component: MenuPage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/admin', name: 'Admin', component: AdminPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
