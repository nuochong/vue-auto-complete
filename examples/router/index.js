import Vue from 'vue';
import VueRouter from 'vue-router';
import Example from '../views/Example.vue';
import Documentation from '../views/Documentation.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Example',
    component: Example
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
