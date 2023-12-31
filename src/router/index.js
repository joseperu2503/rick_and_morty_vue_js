import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/views/Characters.vue'),
    },
    {
      path: '/characters/:characterId',
      name: 'character',
      component: () => import('@/views/Character.vue'),
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import('@/views/Locations.vue'),
    },
    {
      path: '/locations/:locationId',
      name: 'location',
      component: () => import('@/views/Location.vue'),
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: () => import('@/views/Episodes.vue'),
    },
    {
      path: '/episodes/:episodeId',
      name: 'episode',
      component: () => import('@/views/Episode.vue'),
    },
  ],
});

router.beforeEach(async () => {
  store.commit('appbar/setShowSideBar', false);
});

export default router;
