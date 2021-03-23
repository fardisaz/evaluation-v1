import { createRouter, createWebHistory } from 'vue-router';
import Evaluation from './pages/Evaluation.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/evaluation' },
    { path: '/evaluation', component: Evaluation },

    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
