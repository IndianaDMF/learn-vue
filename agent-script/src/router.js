import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:prospectId', name: 'welcome', component: Welcome, props: true,
    },
    {
      path: '/intro',
      name: 'intro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */'./views/Intro.vue'),
    },
  ],
});
